import { Avatar } from '@material-ui/core';
import React from 'react';
import './Video.css';

const Video = ({ image, title, channel, views, timestamp, channelImage }) => {
	return (
		<div className='video'>
			<img src={image} alt='Thumbnail' className='video__thumbnail' />

			<div className='video__info'>
				<Avatar
					src={channelImage}
					alt='Channel Image'
					className='video__avatar'
				/>

				<div className='video__text'>
					<h4>{title}</h4>
					<p>{channel}</p>
					<p>
						{views} • {timestamp}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Video;
