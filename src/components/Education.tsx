export default function EducationPreview() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-extrabold text-text mb-10">Education</h2>

      {/* SLIIT Degree */}
      <div
        className="
          mb-10 p-6 rounded-xl
          transition-all duration-300
          hover:bg-accent/20 hover:backdrop-blur-md
          hover:border hover:border-accent/40
          cursor-pointer
          bg-surface
        "
      >
        <h3 className="text-xl font-semibold text-accent mb-1">
          Bachelor of Science (B.Sc.) - Information Technology
        </h3>
        <p className="text-muted mb-1 font-medium">
          Sri Lanka Institute of Information Technology (SLIIT)
        </p>
        <p className="text-muted mb-2 italic">Nov 2023 – Nov 2027 (Expected)</p>
        <ul className="list-disc list-inside text-muted space-y-1">
          <li>Academic Year 1, Semester 1 – GPA: 3.41</li>
          <li>Academic Year 1, Semester 2 – GPA: 3.26</li>
          <li>Cumulative GPA: 3.33</li>
        </ul>
      </div>

      {/* ESOFT Metro Campus Diplomas */}
      <div
        className="
          p-6 rounded-xl
          transition-all duration-300
          hover:bg-accent/20 hover:backdrop-blur-md
          hover:border hover:border-accent/40
          cursor-pointer
          bg-surface
        "
      >
        <h3 className="text-xl font-semibold text-accent mb-4">ESOFT Metro Campus</h3>

        <div className="mb-6">
          <p className="text-text font-semibold mb-0">
            Diploma of Education - Information Technology
          </p>
          <p className="text-muted italic">Feb 2023 – Feb 2024</p>
        </div>

        <div>
          <p className="text-text font-semibold mb-0">Diploma of Education - English</p>
          <p className="text-muted italic">Mar 2023 – Nov 2023</p>
        </div>
      </div>
    </div>
  );
}