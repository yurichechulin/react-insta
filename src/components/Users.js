import React from 'react';
import User from "./User";
import image from '../img/lOt_Tu6BkG8.jpg';

export default function Users() {
    return (
        <div className="right">
            <User src={image} alt="yurik" name="yurik"/>
            <div className="users__block">
                <User src={image} alt="yurik" name="yurik" min/>
                <User src={image} alt="yurik" name="yurik" min/>
                <User src={image} alt="yurik" name="yurik" min/>
            </div>
        </div>
    );
}