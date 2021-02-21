import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CircleRectangle from '../components/CircleRectangle';

// Constants import
import { HOME } from '../constants/routes';
import { BABY_PINK, PASTEL_PINK, DEEP_CHAMPAGNE, GOLD_CRAYOLA } from '../constants/colors';


const useStyles = makeStyles(theme => ({
	form: {
		width: '50%'
	},
	textfield: {
        borderRadius: '10px',
        color: theme.palette.secondary.main,
        backgroundColor: 'white',
        width: '100%'
    },
	button: {
		color: 'white',
		textTransform: 'None',
		padding: theme.spacing(1, 4),
		backgroundColor: theme.palette.secondary.main
	},
	buttonCitation: {
		color: 'white',
		textTransform: 'None',
		padding: theme.spacing(1, 4),
		backgroundColor: theme.palette.secondary.main
	}, 
	buttonOutline: {
		border: '3px solid #484B70',
		marginLeft: '2%',
		marginTop: '-0.5%',
	},
	rectangle: { 
		height: '400px', 
		backgroundColor: 'red'
	}
}));

const REC_SITES = [
	{
		"title": "Why the vegan diet is not always green",
		"url": "https://www.bbc.com/future/article/20200211-why-the-vegan-diet-is-not-always-green"
	},
	{
		"title": "VEGANISM IS ‘SINGLE BIGGEST WAY’ TO REDUCE OUR ENVIRONMENTAL IMPACT, STUDY FINDS",
		"url": "https://www.independent.co.uk/life-style/health-and-families/veganism-environmental-impact-planet-reduced-plant-based-diet-humans-study-a8378631.html"
	},
	{
		"title": "Why Going Vegan Is One of the Best Things You Can Do for the Environment",
		"url": "https://www.forksoverknives.com/wellness/vegan-diet-helps-environmental-sustainability/"
	},
	{
		"title": "Is a vegan diet better for the environment?",
		"url": "https://www.bbcgoodfood.com/howto/guide/vegan-diet-better-environment#:~:text=Studies%20show%20that%20vegan%20diets,because%20they%20only%20ate%20fruit!"
	}
];

const CIRCLE_COLORS = [PASTEL_PINK, DEEP_CHAMPAGNE, BABY_PINK, GOLD_CRAYOLA]; 

function Home() {
	const classes = useStyles();
	const [inputURL, setInputURL] = useState("");
	const [redirect, setRedirect] = useState(false);

    // useEffect(() => {
    //     // chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    //     //     const currentURL = tabs[0].url;
    //     //     console.log(currentURL);
    //     //     setInputURL(currentURL);
    //     // });
    // });

	const handleChange = (event) => setInputURL(event.target.value);

	const generateCitation = () => {

	};

	const startMeiosis = () => {
		// pass inputURL to backend
	}; 

	const redirectToHome = () => {

	};

	if (redirect)
        return <Redirect to={HOME} />

		return (
			<React.Fragment>
				
				<Typography variant="h6" align="center">
					The following websites discuss similar topics as your current one:
				</Typography>
				
				<br />

				<Grid container direction="row">
					<form className={classes.form} noValidate autoComplete="off">
						<TextField
							value={inputURL}
							onChange={handleChange}
							InputProps={{
								style: {
									fontSize: 20,
									padding: '0.5rem'
								}
							}}
							className={classes.textfield}
						/>
					</form> 
		            <Button onClick={generateCitation} className={classes.buttonOutline}>
						<Button onClick={generateCitation} className={classes.buttonCitation}>
							<Typography variant="h6">
								Generate Citation
							</Typography>
						</Button>
					</Button>
				</Grid>

				<br /> 
				<br /> 
				<br /> 
				<br /> 
				<br /> 
				<br /> 
				<br /> 
				<br /> 
				<br /> 
				<br /> 
				<br /> 
				<br /> 
				
				<Grid container direction="row">
					{REC_SITES.map((site, i) => {
						return (
							<CircleRectangle
								key={i}
								color={CIRCLE_COLORS[i]}
								size={180}
								title={site.title}
								url={site.url}
							/>
						);
					})}
				</Grid>
	
				<br />
				<br />
				<Button onClick={startMeiosis} className={classes.buttonOutline}>
					<Button onClick={startMeiosis} className={classes.button}>
						<Typography variant="h6">
							Undergo Meiosis Again
						</Typography>
					</Button>
				</Button>
				
			</React.Fragment>
		);
}

export default Home;