import "./polaroid.css";

export default function Polaroid({ imgUrl, caption, alt, profileUrl }) {
	return (
		<div className="card">
			<div className="chevron">
				<div className="polaroid">
					<div className="pin"></div>
					<img src={imgUrl} alt={alt} className="polaroid-img" />
				</div>
			</div>

			<div className="post-wrapper">
				<div className="post-details">
					<img className="profile-img" src={profileUrl}></img>
					<p className="caption">{caption}</p>
				</div>
			</div>
		</div>
	);
}
