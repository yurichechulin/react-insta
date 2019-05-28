import React from 'react';
import User from "./User";

export default function Users() {
    return (
        <div className="right">
            <User src="" alt="yurik" name="yurik"/>
            <div className="usersgit__block">
                <User src="" alt="yurik" name="yurik" min/>
                <User src="" alt="yurik" name="yurik" min/>
                <User src="" alt="yurik" name="yurik" min/>
            </div>
        </div>
    );
}