import {
	Grid,
	Typography,
} from "@material-ui/core";
import { isMobile } from 'react-device-detect';
import { useState } from "react";


const LandingPage = () => {
	const [state, setState] = useState({
		mobile: isMobile,
	});
	return (
		<div>
			{state.mobile &&
				<Grid container justifyContent={"center"} alignItems={"center"} style={{ height: "100%" }}>
					<Grid item>
						<Grid container justifyContent={"center"} alignItems={"center"} direction={"column"} wrap={"nowrap"}>

							<Grid item>
								<Typography variant="h1" style={{ textAlign: 'center', marginTop: 30, color: "rgba(255, 255,255, 0.4)", fontFamily: "sfpro", fontSize: 40 }}>
									Lukáš Caha
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body1" style={{ fontSize: 16, textAlign: 'center', marginTop: 15, color: "rgba(255, 255,255, 0.3)", fontFamily: "sfpro" }}>
									Full-stack Web Developer
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body1" style={{ fontSize: 30, textAlign: 'center', marginTop: 15, fontFamily: "sfpro" }}>
									<a className="hoverable" href="tel:735840262" style={{ textDecoration: "none", opacity: 0.3, color: "rgba(255, 255,255)" }}>
										735 840 262
									</a>
								</Typography>
							</Grid>
							<Grid item>
								<Typography variant="body1" style={{ fontSize: 18, textAlign: 'center', marginTop: 15, marginBottom: 30, fontFamily: "sfpro" }}>
									<a className="hoverable" href="mailto:lukas.caha@youklid.cz?subject=Pozdrav&body=Ahoj Lukáši!" style={{ textDecoration: "none", opacity: 0.3, color: "rgba(255, 255,255)" }}>
										lukas.caha@youklid.cz
									</a>
								</Typography>
							</Grid>
							<Grid item style={{ width: "100%" }}>
								<Grid container justifyContent={"space-evenly"} alignItems={"center"} style={{ width: "100%" }}>
									<Grid item>
										<a className="hoverable" href="https://www.linkedin.com/in/lukascaha/" style={{ opacity: 0.3 }} target="_blank" rel="noopener noreferrer">
											<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<rect x="4" y="4" width="16" height="16" rx="2" />
												<line x1="8" y1="11" x2="8" y2="16" />
												<line x1="8" y1="8" x2="8" y2="8.01" />
												<line x1="12" y1="16" x2="12" y2="11" />
												<path d="M16 16v-3a2 2 0 0 0 -4 0" />
											</svg>
										</a>
									</Grid>
									<Grid item>
										<a className="hoverable" href="https://twitter.com/lukas_caha/" style={{ opacity: 0.3 }} target="_blank" rel="noopener noreferrer">
											<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
											</svg>
										</a>
									</Grid>
									<Grid item>
										<a className="hoverable" href="https://github.com/LukasCaha/" style={{ opacity: 0.3 }} target="_blank" rel="noopener noreferrer">
											<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="30" height="30" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
												<path stroke="none" d="M0 0h24v24H0z" fill="none" />
												<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
											</svg>
										</a>
									</Grid>
								</Grid>
							</Grid>
							<Grid item>
								<a className="hoverable" href="https://youklid.cz/" style={{ opacity: 0.3 }} target="_blank" rel="noopener noreferrer">
									<img src="logo.png" alt="youklid" width="150px" style={{ marginTop: 20 }} />
								</a>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			}
			{!state.mobile &&
				<Grid container justifyContent={"center"} alignItems={"center"} style={{ height: "100%" }}>
					<Grid item>
						<Typography variant="h1" style={{ textAlign: 'center', marginTop: 30, color: "rgba(255, 255,255, 0.4)", fontFamily: "sfpro" }}>
							Lukáš Caha
						</Typography>
						<Typography variant="body1" style={{ fontSize: 20, textAlign: 'center', marginTop: 15, color: "rgba(255, 255,255, 0.3)", fontFamily: "sfpro" }}>
							Full-stack Web Developer
						</Typography>

						<Typography variant="body1" style={{ fontSize: 50, textAlign: 'center', marginTop: 15, fontFamily: "sfpro" }}>
							<a className="hoverable" href="tel:735840262" style={{ textDecoration: "none", opacity: 0.3, color: "rgba(255, 255,255)" }}>
								735&nbsp;840&nbsp;262
							</a>
						</Typography>
						<Typography variant="body1" style={{ fontSize: 30, textAlign: 'center', marginTop: 30, fontFamily: "sfpro" }}>
							<a className="hoverable" href="mailto:lukas.caha@youklid.cz?subject=Pozdrav&body=Ahoj Lukáši!" style={{ textDecoration: "none", opacity: 0.3, color: "rgba(255, 255,255)" }}>
								lukas.caha@youklid.cz
							</a>
						</Typography>
					</Grid>
					<a className="hoverable" href="https://youklid.cz/" style={{ position: "absolute", right: 50, bottom: 50, opacity: 0.3 }} target="_blank" rel="noopener noreferrer">
						<img src="logo.png" alt="youklid" width="150px" />
					</a>
					<a className="hoverable" href="https://www.linkedin.com/in/lukascaha/" style={{ position: "absolute", left: 50, bottom: 50, opacity: 0.3 }} target="_blank" rel="noopener noreferrer">
						<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-linkedin" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<rect x="4" y="4" width="16" height="16" rx="2" />
							<line x1="8" y1="11" x2="8" y2="16" />
							<line x1="8" y1="8" x2="8" y2="8.01" />
							<line x1="12" y1="16" x2="12" y2="11" />
							<path d="M16 16v-3a2 2 0 0 0 -4 0" />
						</svg>
					</a>
					<a className="hoverable" href="https://twitter.com/lukas_caha/" style={{ position: "absolute", left: 130, bottom: 50, opacity: 0.3 }} target="_blank" rel="noopener noreferrer">
						<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-twitter" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
						</svg>
					</a>
					<a className="hoverable" href="https://github.com/LukasCaha/" style={{ position: "absolute", left: 210, bottom: 50, opacity: 0.3 }} target="_blank" rel="noopener noreferrer">
						<svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-github" width="60" height="60" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
							<path stroke="none" d="M0 0h24v24H0z" fill="none" />
							<path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
						</svg>
					</a>
				</Grid>
			}
		</div >
	);
};

export default LandingPage;