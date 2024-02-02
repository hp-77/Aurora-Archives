import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                ConvoSpace Project by Harsh Pant
            </h2>
            <p className='text-gray-500 my-2'>
            Step into the future of virtual communication with ConvoSpace, the comprehensive platform designed to facilitate seamless interactions, whether for personal, professional, or educational purposes
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://convo-space-beta.vercel.app" target='_blank' rel='noopener noreferrer'>
                    ConvoSpace 
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://www.searchenginejournal.com/wp-content/uploads/2019/11/8-superstar-video-conferencing-chat-apps-for-business-5de073204c94e.png" />
        </div>
    </div>
  )
}