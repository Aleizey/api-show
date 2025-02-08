import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const NotFound = () => {

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center text-gray-500 text-4xl bg-gray-900">

            {/* <p className="text-8xl text-white shrink-0">404</p> */}
            <DotLottieReact
                src="https://lottie.host/4b31c981-48e8-465e-8445-aa31ff17b770/yOIWwUIFne.lottie"
                loop
                autoplay
                className='w-[1600px]'
            />

            <p>Not Found</p>
        </div>
    )
};

export default NotFound; 