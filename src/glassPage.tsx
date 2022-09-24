import {
	Container,
	Grid,
	makeStyles,
	Theme,
} from "@material-ui/core";
import { GlassCard } from "./GlassCard";
import { isMobile } from 'react-device-detect';
import { useState } from "react";

const useStyles = makeStyles((theme: Theme) => ({
	app: {
		width: "100%",
		height: "100vh",
		//backgroundImage: `url("background.jpg")`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundAttachment: "fixed",
	},
	container: {
		paddingTop: 100,
		padding: theme.spacing(4),
	},
	content: {
		paddingTop: theme.spacing(6),
		padding: theme.spacing(2),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

const GlassPage = (props: any) => {
	const [state, setState] = useState({
		mobile: isMobile,
	});

	const classes = useStyles();
	return (
		<div className={classes.app}>
			<div id="content" style={{
				minHeight: "100vh",
				filter: "contrast(100 %) brightness(100%)",
				backgroundImage: "linear-gradient(315deg, rgba(2, 245, 249, 0.3), rgba(251, 52, 198, 0.38)), url(smoke.png)",
				backgroundRepeat: "repeat-y",
				//backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}>
				{state.mobile && <Container maxWidth="md" className={classes.container} >
					<GlassCard style={{ height: "70vh", transform: "rotateZ(1deg)" }} id="swing">
						<Grid container justifyContent={"center"} alignItems={"center"} style={{ height: "100%" }}>
							<Grid item>
								{props.children}
							</Grid>
						</Grid>
					</GlassCard>
				</Container>}
				{!state.mobile && <Container maxWidth="md" className={classes.container} >
					<GlassCard style={{ height: "70vh", transform: "rotateZ(1deg)" }} id="swing">
						<Grid container justifyContent={"center"} alignItems={"center"} style={{ height: "100%" }}>
							<Grid item>
								{props.children}
							</Grid>
						</Grid>
					</GlassCard>
				</Container>}

			</div>
		</div>
	);
};

export default GlassPage;