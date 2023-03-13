import React from 'react'

const VideoOverlay = ({onClose, url}) => {
  return (
    <div className="fixed z-30 inset-[30%] md:inset-[20%] ">
        <div className='fixed inset-0 w-full bg-black/90'></div>
     
        <div className="fixed right-3 top-52 md:right-[12rem] md:top-20" onClick={onClose}>
            <button type="button" title="Close" class="group rounded-[0.7rem] inline-block cursor-pointer disabled:cursor-default disabled:animate-none transition-colors text-[color:var(--lf-gradient-0,theme(colors.blue.500))] hover:animate-gradient-text focus-visible:animate-gradient-text disabled:text-blue-500/60 text-[0.8rem] leading-[1.2] font-semibold py-[0.5rem] px-[0.8rem] hover:bg-white/10 focus-visible:outline-0 focus-visible:ring-1" tabindex="0"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" class="fill-current w-6 h-6 text-white"><path d="M6.293 6.293a1 1 0 011.414 0L12 10.586l4.293-4.293a1 1 0 111.414 1.414L13.414 12l4.293 4.293a1 1 0 01-1.414 1.414L12 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L10.586 12 6.293 7.707a1 1 0 010-1.414z"></path></svg></button>
        </div>

        <div className="fixed left-1/2 rounded-2xl z-10 overflow-hidden bg-white -translate-x-1/2 w-[90%] md:w-[40rem] lg:w-[54rem]">
          <video
            src={url}
            autoPlay
            playsInline
            className='object-cover'
            controls
            width='972'
          ></video>
        </div>

    </div>
  )
}

export default VideoOverlay