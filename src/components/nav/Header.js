import React, { useState } from "react";
import { Menu, Badge } from 'antd';
import { 
	AppstoreOutlined,
	SettingOutlined,
	UserOutlined,
	UserAddOutlined,
	LogoutOutlined,
	ShoppingOutlined,
	ShoppingCartOutlined,
} from '@ant-design/icons';
import { Link } from "react-router-dom";
import firebase from "firebase";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import Search from "../forms/Search";

const { SubMenu, Item } = Menu;

const Header = () => {
	const [current, setCurrent] = useState("home");
	let dispatch = useDispatch();
	let {user, cart} = useSelector((state) => ({...state}))
	let history = useHistory();

	const handleClick = (e) => {
		setCurrent(e.key);
	};

	const logout = () => {
		firebase.auth().signOut()
		dispatch({
			type: "LOGOUT",
			payload: null,
		});
		history.push("/login");
	}

	return (
	    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">

		    <Item key="home" icon={<AppstoreOutlined />}>
		      <Link to="/">Home</Link>
		    </Item>

		    <Item key="shop" icon={<ShoppingOutlined />} className="ml-auto">
		      <Link to="/shop">Shop</Link>
		    </Item>

		    <Item key="cart" icon={<ShoppingCartOutlined />} className="ml-auto">
		      <Link to="/cart">
		      	<Badge count={cart.length} offset={[9, 0]}>
		      		Cart
		      	</Badge>
		      </Link>
		    </Item>

		    <span className="p-1">
		    	<Search />
		    </span>

		    {!user && (
		    	<Item key="register" icon={<UserAddOutlined />} className="">
			      <Link to="/register">Register</Link>
			    </Item>
		    )}

		    {!user && (
		    	<Item key="login" icon={<UserOutlined />}>
			      <Link to="/login">Login</Link>
			    </Item>
		    )}

		    {user && (
		    	<SubMenu
		    		title={user.email && user.email.split('@')[0]}
		    		icon={<SettingOutlined />}
		    		className="ml-auto"
		    	>
			        {user && user.role === "subscriber" && (
			        	<Item>
			        		<Link to="/user/history">Dashboard</Link>
			        	</Item>
			        )}

			        {user && user.role === "admin" && (
			        	<Item>
			        		<Link to="/admin/dashboard">Dashboard</Link>
			        	</Item>
			        )}


			        <Item icon={<LogoutOutlined />} onClick={logout}>Logout</Item>
			    </SubMenu>
		    )}

		  </Menu>
		);
}
export default Header;