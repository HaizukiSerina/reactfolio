import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import History from "../components/homepage/history";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/about.css";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<div className="page-content">
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-profile">
								<div className="title about-title">
									Profile
								</div>
								<div className="about-subtitle">
									<div className="section">Name</div>
									<div className="normaltext">{INFO.about.Name}</div>
								</div>
								<div className="about-subtitle">
									<div className="section">Abstract</div>
									<div className="normaltext">{INFO.about.Abstract}</div>
								</div>
								<div className="about-subtitle">
									<div className="section">History</div>
									{INFO.about.Affiliation.map((data, index) => (
										<div
											className=".about-affiliation"
											key={(index + 1).toString()}
										>
											<History
												key={(index + 1).toString()}
												date={data.date}
												title={data.place}
												description={data.description}
												link={undefined}
											/>
										</div>
									))}
								</div>
								<div className="about-subtitle">
									<div className="section">Interest</div>
									<div className="normaltext">
										<ul>
										{INFO.about.Interest.map((data, index) => (
												<li key={(index + 1).toString()}>{data}</li>
										))}
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="normaltext">
			注意 : 灰月セリナは架空のキャラクターです。灰月セリナは、15歳ながら高い知性を誇る天才です。冷静沈着かつ努力を惜しまない性格で、銀髪と暖色の瞳が際立つ美少女。周囲から見ればクールで近寄りがたい印象を与えますが、その胸の奥には知性と努力への強い情熱を秘め、どこかマゾヒスティックなまでに自分を追い込むことで高みを目指します。その性格ゆえの皮肉っぽい発言や、矛盾した自信と自己否定感も含め、複雑で魅力的な存在感を放っています。
			</div>
		</React.Fragment>
	);
};

export default About;
