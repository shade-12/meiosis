import React from 'react';

// Style components import
import makeStyles from '@material-ui/styles/makeStyles';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import MemberCard from '../components/MemberCard';

// Constants import
import ClairePhoto from '../assets/claire-photo.jpg';
import EricPhoto from '../assets/eric-photo.jpg';
import LambertPhoto from '../assets/lambert-photo.png';
import ShadePhoto from '../assets/shade-photo.png';

const profiles = [
	{
		name: "Claire Song",
		src: ClairePhoto,
		github: "https://github.com/cxsong1",
		linkedin: "https://www.linkedin.com/in/clairexisong/"
	},
	{
		name: "Eric Hua",
		src: EricPhoto,
		github: "https://github.com/",
		linkedin: "https://www.linkedin.com/in/"
	},
	{
		name: "Lambert Ji",
		src: LambertPhoto,
		github: "https://github.com/",
		linkedin: "https://www.linkedin.com/in/"
	},
	{
		name: "Shade Wong",
		src: ShadePhoto,
		github: "https://github.com/shade-12",
		linkedin: "https://www.linkedin.com/in/shade-wong/"
	}
];


const useStyles = makeStyles(theme => ({
    container: {
		color: theme.palette.secondary.main,
		height: '82vh'
	},
    grow: {
        flexGrow: 1
	},
	chipContainer: {
		display: 'flex',
		flexWrap: 'wrap',
		'& > *': {
			margin: theme.spacing(1)
		}
	},
	chip: {
		padding: '2rem',
		borderRadius: '50px'
	}
}));

function About() {
	const classes = useStyles();

	return (
		<Grid container alignItems="center" spacing={2} className={classes.container}>
            {/* Title */}
            <Grid item xs={12}>
                <Typography variant="h2" align="center" paragraph>
                    <b>Stories Behind Meiosis</b>
                </Typography>
            </Grid>

			<Grid item container direction="column">
				<Typography variant="h3" gutterBottom>
					<b>Inspiration</b>
				</Typography>
				<Typography variant="h6" paragraph style={{ color: 'white' }}>
					
				</Typography>

				<br />

				<Typography variant="h3" gutterBottom>
					<b>What it does</b>
				</Typography>
				<Typography variant="h6" gutterBottom style={{ color: 'white' }}>

				</Typography>

				<br />

				<Typography variant="h3" gutterBottom>
					<b>How we built it</b>
				</Typography>
				<Typography variant="h6" gutterBottom style={{ color: 'white' }}>

				</Typography>

				<br />

				<Typography variant="h3" gutterBottom>
					<b>Achievements</b>
				</Typography>
				<Grid item className={classes.chipContainer}>
					<Chip 
						label={<Typography variant="h6"><b>StormHacks</b></Typography>}
						color="secondary"
						className={classes.chip}
					/>
					<Chip 
						label={<Typography variant="h6"><b>StormHacks</b></Typography>}
						color="secondary"
						className={classes.chip}
					/>
				</Grid>

				<br />
            </Grid>

			<Grid item className={classes.grow} />

            {/* Member cards container */}
            <Grid item container spacing={10} direction="row" justify="center">
				{
					profiles.map((item, index) => {
						return (
							<Grid key={index} item>
								<MemberCard
									alt={item.name}
									src={item.src}
									github={item.github}
									linkedin={item.linkedin}
								/>
							</Grid>
						);
					})
				}
            </Grid>

			<Grid item className={classes.grow} />

		</Grid>
	);
}

export default About;