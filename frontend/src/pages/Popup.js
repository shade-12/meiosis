import React, { useState } from 'react';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Circle from '../components/Circle';


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
		color: 'white',
		textTransform: 'None',
		padding: theme.spacing(1, 4),
		borderRadius: '8px',
		backgroundColor: theme.palette.secondary.main
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

function Popup() {
	const classes = useStyles();
	const [inputURL, setInputURL] = useState("");

	const handleChange = (event) => setInputURL(event.target.value);

	return (
		<React.Fragment>

            <Button className={classes.button}>
				<Typography variant="h6">
				<b>Start Meiosis</b>
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

			<Button className={classes.button}>
				<Typography variant="h6">
					<b>Generate Citation</b>
				</Typography>
			</Button>

			<br /> 
			
			<Grid container direction="row" justify="center">
				{REC_SITES.map(site => {
					return (
						<Circle
							size={160}
							title={site.title}
							url={site.url}
						/>
					);
				})}
			</Grid>

			<Button className={classes.button}>
				<Typography variant="h6">
					<b>More Details</b>
				</Typography>
			</Button>
            
		</React.Fragment>
	);
}

export default Popup;