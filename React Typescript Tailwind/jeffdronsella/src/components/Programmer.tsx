export default function Programmer() {
  return (
    <main className="max-w-[1000px] px-4 mx-auto pb-4">
      <div className="font-sans sm:text-lg lg:text-xl text-justify">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl mt-4 text-center">Lead/Senior Software Developer</h2>
        <ul className="flex justify-center gap-12 sm:gap-24 underline mt-4">
          <li><a href="https://www.linkedin.com/in/jeffdronsella/">LinkedIn</a></li>
          <li><a href="https://github.com/jefferydronsella/jeffdronsella/tree/main/React%20Typescript%20Tailwind/jeffdronsella">GitHub (website code)</a></li>
        </ul>

        <h3 className="text-xl sm:text-2xl lg:text-3xl mt-4">Professional Summary</h3>
        <p className="mt-2">Experienced Lead Software Developer with a strong background in full stack Android native and .NET development. Known for excellent problem-solving skills, project management, and mentoring abilities. Proven track record in delivering high-quality software and building strong professional relationships.</p>

        <h3 className="text-xl sm:text-2xl lg:text-3xl mt-2">Professional Experience</h3>

        <p className="mt-2 font-semibold ml-1">Callibrity Solutions, LLC.</p>
        <div className="sm:flex">
          <p className="ml-2">Senior Software Developer</p>
          <p className="hidden sm:inline">&nbsp;–&nbsp;</p>
          <p className="ml-2 sm:ml-0">May 2022 - February 2025</p>
        </div>
        <ul className="ml-2">
          <li>●	Partnered with a development team to build the Android edition of the Fifth Third Mobile Banking app using Kotlin and Jetpack Compose within an Agile/Scrum framework.</li>
          <li>●	Collaborated with a team of developers to create reusable UI components.</li>
          <li>●	Migrated XML-based UI screens to Jetpack Compose for improved performance and maintainability.</li>
          <li>●	Authored unit tests to validate business logic and ensure reliability.</li>
          <li>●	Performed app maintenance, implemented new features aligned with design specifications, and participated in code reviews to ensure quality.</li>
          <li>●	Trigger CI/CD pipelines as needed.</li>
          <li>●	Contributed as an integral part of a team to develop a revamped version of a client website using React, Typescript and Tailwind CSS.</li>
        </ul>

        <p className="mt-2 font-semibold ml-1">Oman Systems, Inc.</p>
        <div className="sm:flex">
          <p className="ml-2">Lead Software Developer</p>
          <p className="hidden sm:inline">&nbsp;–&nbsp;</p>
          <p className="ml-2 sm:ml-0">July 2010 - May 2022</p>
        </div>
        <ul className="ml-2">
          <li>●	Directed a team of developers through the full software lifecycle, from initial analysis to successful delivery.</li>
          <li>●	Mentored developers and engineers from early career stages to become skilled and effective contributors.</li>
          <li>●	Developed full stack applications using .NET and SQL Server.</li>
          <li>●	Developed native Android and iOS client applications from scratch.</li>
        </ul>

        <h3 className="text-xl sm:text-2xl lg:text-3xl mt-2">Skills</h3>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3">
          <li>•	Mobile app development</li>
          <li>•	Android development</li>
          <li>•	Kotlin</li>
          <li>•	Jetpack Compose</li>
          <li>•	Java</li>
          <li>•	Full stack development</li>
          <li>•	Project management</li>
          <li>•	.NET development</li>
          <li>•	SQL Server</li>
          <li>•	T-SQL coding</li>
          <li>•	React</li>
          <li>•	JavaScript</li>
          <li>•	Typescript</li>
          <li>•	GitHub</li>
        </ul>

        <h3 className="text-xl sm:text-2xl lg:text-3xl mt-2">Education</h3>
        <p className="mt-2 font-semibold ml-1">Bachelors of Science: Computer Science</p>
        <div className="sm:flex">
          <p className="ml-2">University of Michigan-Dearborn</p>
          <p className="hidden sm:inline">&nbsp;–&nbsp;</p>
          <p className="ml-2 sm:ml-0">Dearborn, MI </p>
          <p className="hidden sm:inline">&nbsp;–&nbsp;</p>
          <p className="ml-2 sm:ml-0">May 2000</p>
        </div>
        <p className="text-sm sm:text-lg ml-2">Graduated with honors</p>
      </div>
    </main >
  )
}