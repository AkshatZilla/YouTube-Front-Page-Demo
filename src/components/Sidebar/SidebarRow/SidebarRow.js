import React from 'react';
import './SidebarRow.css';

const SidebarRow = ({ selected, title, Icon }) => {
	return (
		<div className={`sidebarRow ${selected && 'selected'}`}>
			{Icon && <Icon className='sidebarRow__icon' />}
			<h1 className='sidebarRow__title'>{title}</h1>
		</div>
	);
};

export default SidebarRow;
