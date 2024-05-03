import Image from 'next/image'

const Register = () => {

    return (
        <>
            <div className='flex  mt-24 justify-between'>
                <div className='mt-24 ml-72'>
                    <Image
                        alt="Logo Instamint"
                        src="/assets/logo-instamint.png"
                        width={250}
                        height={250}
                    />
                </div>
                <hr />
                <div className='mt-24 mr-72'>
                    <input className='border-2  px-8 rounded-md border-black'></input>
                </div>
            </div>
        </>
    )
}


export default Register
