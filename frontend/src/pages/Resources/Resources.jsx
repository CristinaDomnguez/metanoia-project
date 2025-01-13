import './Resources.css';

export default function Resources() {
    return (
        <>
            <div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat deleniti, ducimus voluptatibus at natus asperiores vero dolorum officia cum distinctio? Vero autem quos, animi illum ipsum veniam eum distinctio minus voluptates quod quia numquam nobis aliquam, vel aliquid alias exercitationem tempora consequuntur deleniti! Tempora id harum aliquid maiores. Voluptatum dolorem impedit tenetur, quod odio, officia veritatis laudantium exercitationem minima corrupti aspernatur omnis. Tempore tempora, voluptate dignissimos magnam quidem quo eos ab. Quidem ratione non soluta. Molestiae harum vero veniam ipsam. Iure dolor asperiores repellendus, nostrum tempore nemo cumque, corporis velit error expedita eius praesentium et ut necessitatibus. Nesciunt, consectetur eveniet.
                </p>
            </div>

            {/* iconos */}
            <div className='icons'>
                <div className='spotify-icon'>
                    <img src="/spotify.svg" alt="Spotify logo" height={70} width={70} />
                    <h2>Spotify</h2>
                </div>

                <div className='youtube-icon'>
                    <img src="/youtube.svg" alt="Youtube logo" height={70} width={70} />
                    <h2>Youtube</h2>
                </div>
            </div>
        </>
    );
}
