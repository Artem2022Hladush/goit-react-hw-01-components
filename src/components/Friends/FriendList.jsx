import PropTypes from 'prop-types';
import css from '../Friends/friends.module.css';
import FriendListItem from './FriendListItem';


const FriendList=({friends})=>(
	<ul className={css.friend__list}>
		{friends.map(({avatar,name,isOnline,id})=>(
			<FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
		))}
	</ul>
	)
	FriendList.propypes={
		friends: PropTypes.arrayOf(
			PropTypes.exact({
			avatar: PropTypes.string.isRequired,
			name: PropTypes.string.isRequired,
			isOnline: PropTypes.bool.isRequired,
			id: PropTypes.number.isRequired,
			})
		),
	}
	export default FriendList;