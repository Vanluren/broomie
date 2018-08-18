import React from 'react';
import PropTypes from 'prop-types';
import InfoBoxRow from '../../../../commonComponents/TicketInfoRow/TicketInfoRow.container';
import InfoBox from '../../../../commonComponents/TicketInfoRow/components/InfoBox';
import InfoBoxText from '../../../../commonComponents/TicketInfoRow/components/InfoBoxText';

const ContactInfoRow = ({name, tel, email, location, priority,timestamp }) => {
	const formatDate = (dateToFormat) =>{
		const date = dateToFormat.toDate();
		return date.toLocaleString('dk-DK');
	};
	return(
		<InfoBoxRow header='Oplysninger'>
			<InfoBox col={{ size: 6 }}>
				<InfoBoxText
					title='Date'
					value={formatDate(timestamp)}
				/>
				<InfoBoxText
					title='Navn'
					value={name}
				/>
				<InfoBoxText
					title='Telefon'
					value={tel}
				/>
				<InfoBoxText
					title='Email'
					value={email}
				/>
			</InfoBox>
			<InfoBox col={{ size: 5, offset: 1}}>
				<InfoBoxText
					title='Navn'
					value={name}
				/>
				<InfoBoxText
					title='Lejlighed'
					value=''
				/>
				<InfoBoxText
					title='Lokation'
					value={location}
				/>
				<InfoBoxText
					title='Prioritering'
					value={priority}
				/>
			</InfoBox>
		</InfoBoxRow>
	);
};

ContactInfoRow.propTypes = {
	name: PropTypes.string,
	tel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
	email: PropTypes.string,
	location: PropTypes.string,
	priority:PropTypes.string,
	timestamp: PropTypes.shape(Date)
};
ContactInfoRow.defaultProps = {
	name: null,
	tel: null,
	email: null,
	dep: null,
	location: null,
	priority: null,
	timestamp: null
};

export default ContactInfoRow;