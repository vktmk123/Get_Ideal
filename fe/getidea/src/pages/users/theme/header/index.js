import { memo, useState } from 'react';
import { AiOutlineFacebook, AiOutlineGlobal, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineMail, AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './style.scss';
import { formatter } from 'utils/formater';
import { ROUTERS } from 'utils/router';


const Header = () => {
    const [menus, setMenus] = useState([
        {
            name:"trang chu",
            path:ROUTERS.USER.HOME,
        },
        {
            name:"cuong hang",
            path:ROUTERS.USER.PRODUCTS,  
        },
        {
            name:"San Pham",
            path:"", 
            isShowSubmenu:false,
            child:[
                {
                    name:"thit",
                    path:"",
                },
                {
                    name:"rau",
                    path:"",
                },
                {
                    name:"qua",
                    path:"",
                },
            ]
        },
        {
            name:"bai viet",
            path:"",  
        },
        {
            name:"lien he",
            path:"",  
        },
    ]);

    return (
        <>
            <div className='header_top'>
                <div className="container">
                    <div className='row'>
                        <div className='col-6 header_top_left'>
                            <ul>
                                <li>
                                    <AiOutlineMail />
                                    thanh@gmail.com
                                </li>
                                <li>Hello i love you {formatter(3000)}</li>
                            </ul>
                        </div>
                        <div className='col-6 header_top_right'>
                            <ul>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineFacebook />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineInstagram />
                                    </Link>

                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineLinkedin />
                                    </Link>

                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineGlobal />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={""}>
                                        <AiOutlineUser />
                                    </Link>
                                    <span>Đăng nhập</span>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-xl-3'>
                        <div className='header_logo'>
                            <h1>VT Shop</h1>
                        </div>
                    </div>
                    <div className='col-xl-6'> 
                        <nav className='header_menu'>
                            <ul>
                                {menus?.map((menu, menuKey) => (
                                    <li key={menuKey} className={menuKey === 0 ? 'active' : ""}>
                                        <Link to={menu?.path}>{menu?.name}</Link>
                                        {menu.child && (
                                                <ul className='header_menu_dropdown'>
                                                    {menu.child.map((chiledItem, chiledKey)=>(
                                                        <li key={`${menuKey} - ${chiledKey}`}>
                                                        <Link to={chiledItem.path}>{chiledItem.name}</Link>
                                                        </li>
                                                        ))
                                                    }
                                                    
                                                </ul>
                                            )
                                        }
                                    </li>
                                ))} 
                            </ul>
                        </nav>
                    </div>
                    <div className='col-xl-3'>
                        <div className='header_cart'>
                            <div className='header_cart_price'>
                                <span>{formatter(1000232)}</span>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <Link to=""> <AiOutlineShoppingCart/> <span>10</span> </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>

    );
};

export default memo(Header);