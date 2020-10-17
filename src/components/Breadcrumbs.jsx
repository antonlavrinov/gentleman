import React from 'react';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import {Link} from 'react-router-dom';

const Breadсrumbs = ({breadcrumbs}) => {
    return (
        <div className="breadcrumbs">
            {breadcrumbs.map(({ breadcrumb }, idx) => {
                return (
                    <Link className="breadcrumbs__link" key={idx} to={breadcrumb.key}>{breadcrumb}</Link>
                )
                
                })}
        </div>
    )
}

const routeConfig = [
    {
        path: "/",
        breadcrumb: 'Главная'
    },
    {
        path: "/catalog",
        breadcrumb: 'Каталог'
    },
    {
        path: "/catalog/clothing",
        breadcrumb: 'Одежда'
    },
    {
        path: "/catalog/shoes",
        breadcrumb: 'Обувь'
    },
    {
        path: "/catalog/accessories",
        breadcrumb: 'Аксессуары'
    },
    {
        path: "/catalog/clothing/suits",
        breadcrumb: 'Костюмы'
    },




  ];

export default withBreadcrumbs(routeConfig)(Breadсrumbs);