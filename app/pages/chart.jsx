import { withRouter } from 'next/router'
import HeaderLayout from '../components/headerlayout'
import CSS from '../utils/css'

export default withRouter((props) => {
	const { title } =  props.router.query

	return (
		<div>	
			<CSS/>
			<HeaderLayout 
				headerTitle={title.charAt(0).toUpperCase() + title.slice(1)}/>
		</div>
	)
})