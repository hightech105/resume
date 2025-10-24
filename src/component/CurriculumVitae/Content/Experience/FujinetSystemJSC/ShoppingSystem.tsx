import {Project} from "../Project";

export const ShoppingSystem = () => {
	return (
		<Project projectName={"Shopping system"} startTime={"02/2023"} endTime={"03/2023"}
		         role={"Trial software developer"}>
			<p>
				A trial project is assigned by the mentor to assess individual capabilities. <br/>
			</p>
			<ul>
				<li>
					<strong>Project features:</strong> Search, Add, Edit, Delete, Order, Shop cart.
				</li>
				<li>
					<strong>Technologies:</strong> Spring boot, Thymeleaf, PostgreSQL
				</li>
				<li>
					<strong>Team size:</strong> 1
				</li>
				<li>
					<strong>Role:</strong> Receive detailed design from the mentor, then proceed with coding and testing.
				</li>
				<li>
					<strong>Result:</strong> I completed this project in about two weeks and received feedback from my mentor that
					I learn and adapt quickly.
				</li>
			</ul>
		</Project>
	)
}