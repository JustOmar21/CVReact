import React, {Compontent} from 'react';
class CV extends React.Component{
    render(){
        return(
                
<div class="resume_wrapper">
	<div class="resume_left">
		<div class="resume_image">
			<img src="assets/pic.jpg" alt="Resume_image"/>
		</div>
		<div class="resume_bottom">
			<div class="resume_item resume_namerole">
				<div class="name">Omar Tarek</div>
				<div class="role">Student</div>
			</div>
			<div class="resume_item resume_profile">
				<div class="resume_title">Profile</div>
				<div class="resume_info">My name is Omar, I am a student who dreams of doing big things in the future</div>
			</div>
			<div class="resume_item resume_address">
				<div class="resume_title">Address</div>
				<div class="resume_info">
					Batanon,<br/>
					Shebin Elkom,<br/>
					Menofia, Egypt
				</div>
			</div>
			<div class="resume_item resume_contact">
				<div class="resume_title">Contact</div>
				<div class="resume_info">
					<div class="resume_subtitle">Phone</div>
					<div class="resume_subinfo">+20 106 094 3867</div>
				</div>
				<div class="resume_info">
					<div class="resume_subtitle">Email</div>
					<div class="resume_subinfo">tarekes68@gmail.com</div>
				</div>
			</div>
			<div class="resume_item resume_skills">
				<div class="resume_title">Skills</div>
				<div class="resume_info">
					<div class="skills_list">
						<div class="skills_left">HTML</div>
						<div class="skills_bar">
							<p>
								<span style={{width: "40%"}}></span>
							</p>
						</div>
					</div>
					<div class="skills_list">
						<div class="skills_left">CSS</div>
						<div class="skills_bar">
							<p>
								<span style={{width: "20%"}}></span>
							</p>
						</div>
					</div>
					<div class="skills_list">
						<div class="skills_left">Javascript</div>
						<div class="skills_bar">
							<p>
								<span style={{width: "10%"}}></span>
							</p>
						</div>
					</div>
					<div class="skills_list">
						<div class="skills_left">C++</div>
						<div class="skills_bar">
							<p>
								<span style={{width: "30%"}}></span>
							</p>
						</div>
					</div>
					<div class="skills_list">
						<div class="skills_left">Java</div>
						<div class="skills_bar">
							<p>
								<span style={{width: "35%"}}></span>
							</p>
						</div>
					</div>
					<div class="skills_list">
						<div class="skills_left">Problem solving</div>
						<div class="skills_bar">
							<p>
								<span style={{width: "20%"}}></span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="resume_right">
		<div class="resume_item resume_namerole">
			<div class="name">Omar Tarek</div>
			<div class="role">Student</div>
		</div>
		<div class="resume_item resume_education">
			<div class="resume_title">Education</div>
			<div class="resume_info">
				<div class="resume_data">
					<div class="year">2019 - 2023</div>
					<div class="content">
						<p>Computer Science</p>
						<p>Currnetly a third-year student in Menofia university</p>
					</div>
				</div>
			</div>
		</div>
		<div class="resume_item resume_experience">
			<div class="resume_title">Experience</div>
			<div class="resume_info">
				<div class="resume_data">
					<div class="year">2019 - <span style={{backgroundcolor: "#009688", color: "white", padding: "4px", borderradius: "20px"}}>Now</span></div>
					<div class="content">
						<p>Problem Solving</p>
						<p>Trainee at ICPC Menofia</p>
					</div>
				</div>
				<div class="resume_data">
					<div class="year">2021 - 2021</div>
					<div class="content">
						<p>ECPC</p>
						<p>Achieved the 13<sup>th</sup> place in ECPC Qualificaton rounds</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
        )
    }
}
export default CV