import Input from '../../components/Input'
import Counter from '../../components/Counter'
import TestMemo from '../../components/TestMemo'
import TestUseInput from '../../components/TestUseInput'
import TestUseHover from '../../components/TestUserHover'
import TestUseLS from '../../components/TestUseLS'

const Home = () => {
	return (
		<div className='Home'>
			<h1>Home</h1>
			{/* <Input />
			<Counter /> */}
			<TestUseLS />
		</div>
	)
}

export default Home;