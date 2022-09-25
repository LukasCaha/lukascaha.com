import {
	Grid,
	Typography,
} from "@material-ui/core";
import { isMobile } from 'react-device-detect';
import { useState } from "react";
import { Link } from "react-router-dom";


const NotFoundPage = () => {
	const [state, setState] = useState({
		mobile: isMobile,
	});
	return (
		<div>
			{state.mobile &&
				<Grid container justifyContent={"center"} alignItems={"center"} direction={"column"} wrap={"nowrap"}>
					<Grid item>
						<Typography variant="h1" style={{ textAlign: 'center', marginTop: 30, color: "rgba(255, 255,255, 0.4)", fontFamily: "sfpro", fontSize: 80 }}>
							404
						</Typography>
					</Grid>
					<Grid item>

						<Typography variant="body1" style={{ fontSize: 30, textAlign: 'center', marginTop: 15, fontFamily: "sfpro" }}>
							<Link to="/" className="hoverable" style={{ textDecoration: "none", opacity: 0.3, color: "rgba(255, 255,255)" }}>
								Hlavní stránka
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 12, position: "relative", top: 8 }}>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<line x1="5" y1="12" x2="19" y2="12" />
									<line x1="13" y1="18" x2="19" y2="12" />
									<line x1="13" y1="6" x2="19" y2="12" />
								</svg>
							</Link>
						</Typography>

					</Grid>
				</Grid>
			}
			{!state.mobile &&
				<Grid container justifyContent={"center"} alignItems={"center"} direction={"column"} wrap={"nowrap"}>
					<Grid item>
						<Typography variant="h1" style={{ textAlign: 'center', marginTop: 30, color: "rgba(255, 255,255, 0.4)", fontFamily: "sfpro", fontSize: 210 }}>
							404
						</Typography>
					</Grid>
					<Grid item>
						<Typography variant="body1" style={{ fontSize: 30, textAlign: 'center', marginTop: 15, fontFamily: "sfpro" }}>
							<Link to="/" className="hoverable" style={{ textDecoration: "none", opacity: 0.3, color: "rgba(255, 255,255)" }}>
								Hlavní stránka
								<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right" width="40" height="40" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: 12, position: "relative", top: 8 }}>
									<path stroke="none" d="M0 0h24v24H0z" fill="none" />
									<line x1="5" y1="12" x2="19" y2="12" />
									<line x1="13" y1="18" x2="19" y2="12" />
									<line x1="13" y1="6" x2="19" y2="12" />
								</svg>
							</Link>
						</Typography>

					</Grid>
				</Grid>
			}
		</div>
	);
};

export default NotFoundPage;