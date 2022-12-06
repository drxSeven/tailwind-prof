import { RiQuestionAnswerFill } from 'react-icons/ri'

const FrontTitle = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div class="group">
                <div className="title-card">
                    <p className="text-3xl">
                        De'Ondre Ledet <br/>
                    </p>
                    <p className="text-md">
                        Web Developer
                    </p>
                </div>
                <span className='hidden-rex '>
                    <HiddenRex icon="about"/> 
                    <HiddenRex icon="projects"/> 
                    <HiddenRex icon="contact"/> 
                </span>
            </div>
        </div>
    )
}


const HiddenRex = ({ icon }) => (
    <div className='hidden-rex-i group-hover:scale-100 hover:bg-blue-500 transition-all'>
        <a href=''>{icon}</a>
    </div>
)

export default FrontTitle