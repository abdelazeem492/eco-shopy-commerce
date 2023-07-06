import { Container } from "react-bootstrap";
import HeroImg from "../assets/heroImg.jpg";

function Hero() {
	return (
		<Container className='hero d-flex align-items-center justify-content-between gap-3 gap-lg-5 flex-lg-row flex-column pt-5 mt-3'>
			<div className='pt-5 pt-lg-0'>
				<h1>Get the product now before they get sold</h1>
				<p className='fs-6 text-secondary my-4'>
					Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
					plant cold-pressed tacos poke beard tote bag. Heirloom echo park
					mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon
					try-hard chambray.
				</p>
				<div>
					<a href='#categories' className='btn btn-primary btn-lg'>
						Explore Our Categories <i className='bi bi-bag-fill'></i>
					</a>
				</div>
			</div>
			<img src={HeroImg} alt='image' className='hero-img' />
		</Container>
	);
}

export default Hero;
