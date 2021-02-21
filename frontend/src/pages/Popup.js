import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Circle from '../components/Circle';

// Constants import
import { HOME } from '../constants/routes';
import { BABY_PINK, DEEP_CHAMPAGNE, GOLD_CRAYOLA, PASTEL_PINK } from '../constants/colors';


const useStyles = makeStyles(theme => ({
	form: {
		width: '70%'
	},
	textfield: {
        borderRadius: '10px',
        color: theme.palette.secondary.main,
        backgroundColor: 'white',
        width: '100%'
    },
	button: {
		color: theme.palette.secondary.main,
		textTransform: 'None',
		padding: theme.spacing(1, 4),
		border: '3px solid #484B70',
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

const CIRCLE_COLORS = [PASTEL_PINK,BABY_PINK,BABY_PINK, PASTEL_PINK]; 
//const CIRCLE_COLORS = [PASTEL_PINK, DEEP_CHAMPAGNE, BABY_PINK, GOLD_CRAYOLA]; 

const ALIGN_ARR = ['end', 'end', 'start', 'start']; 
const JUSTIFY_ARR = ['end', 'start', 'end', 'start'];

function Popup() {
	const classes = useStyles();
	const [inputURL, setInputURL] = useState("");
	const [redirect, setRedirect] = useState(false);

	// useEffect(() => {
    //     chrome.tabs.query({ currentWindow: true, active: true }, (tabs) => {
    //         const currentURL = tabs[0].url;
    //         console.log(currentURL);
    //         setInputURL(currentURL);
    //     });
    // });

	const handleChange = (event) => setInputURL(event.target.value);

	const startMeiosis = () => {
		// pass inputURL to backend
	};

	const generateCitation = () => {

	};

	const redirectToHome = () => setRedirect(true);

	if (redirect)
        return <Redirect to={HOME} />

	return (
		<React.Fragment>

			<br /> 
            <Button onClick={startMeiosis} className={classes.button}>
				<Typography variant="h6">
					Start Meiosis
				</Typography>
			</Button>

			<br /> 
			
			<Typography variant="h6" align="center">
				The following websites discuss similar topics as your current one:
			</Typography>
			
			<br />

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
			
			<br /> 

			<Button onClick={generateCitation} className={classes.button}>
				<Typography variant="h6">
					Generate Citation
				</Typography>
			</Button>

			<br /> 
			
			<div>			
				<Grid container direction="row">
					{REC_SITES.map((site, i) => {
						return (
							<Circle
								key={i}
								color={CIRCLE_COLORS[i]}
								size={160}
								title={site.title}
								url={site.url}
								align={ALIGN_ARR[i]} 
								justify={JUSTIFY_ARR[i]}
							/>
						);
					})}
				</Grid>
			</div>


			<Button onClick={redirectToHome} className={classes.button}>
				<Typography variant="h6">
					<b>More Details</b>
				</Typography>
			</Button>
            
		</React.Fragment>
	);
}

export default Popup;