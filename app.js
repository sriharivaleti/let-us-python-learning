const modules = [
  {
    id: 1,
    title: "Introduction to Python",
    stage: "foundation",
    summary: "Positions Python as a portable, multi-paradigm language used across scripting, systems, games, robotics, GUI work, and rapid prototyping.",
    practice: ["Explain portability", "Compare programming models", "Name practical Python fields"]
  },
  {
    id: 2,
    title: "Getting Started",
    stage: "foundation",
    summary: "Covers the shell prompt, IDLE modes, script execution, pip, PyPI, and common third-party tools such as NumPy, Pandas, Matplotlib, SciPy, Jupyter, Spyder, and OpenCV.",
    practice: ["Differentiate interactive and script mode", "Match tools to uses", "Install library mentally"]
  },
  {
    id: 3,
    title: "Python Basics",
    stage: "foundation",
    summary: "Practices variables, swapping, modules, math functions, random numbers, arithmetic, identity, type checks, comments, and core data categories.",
    practice: ["Swap without a temporary variable", "Use math and random modules", "Predict type and id behavior"]
  },
  {
    id: 4,
    title: "Strings",
    stage: "core",
    summary: "Builds confidence with indexing, slicing, concatenation, immutability, methods, formatting, and string transformation tasks.",
    practice: ["Slice from both ends", "Join and replace substrings", "Reason about immutable values"]
  },
  {
    id: 5,
    title: "Decision Control Instruction",
    stage: "core",
    summary: "Uses if, elif, else, conditional expressions, truthiness, logical operators, pass, and output prediction for branching code.",
    practice: ["Convert if-else to ternary form", "Trace boolean expressions", "Choose between pass and real work"]
  },
  {
    id: 6,
    title: "Repetition Control Instruction",
    stage: "core",
    summary: "Explores while, for, range, nested loops, loop else, break/continue, and patterns where Python lacks a direct do-while construct.",
    practice: ["Convert while to for", "Use descending ranges", "Design nested loops"]
  },
  {
    id: 7,
    title: "Console Input/Output",
    stage: "core",
    summary: "Shows input parsing, split values, print endings, f-strings, field widths, alignment, and output layout.",
    practice: ["Read multiple values", "Format columns", "Control newline behavior"]
  },
  {
    id: 8,
    title: "Lists",
    stage: "core",
    summary: "Focuses on list creation, slicing, aliases, identity, mutability, nested lists, modification, deletion, and list methods.",
    practice: ["Trace list aliases", "Reverse and slice", "Modify nested structures"]
  },
  {
    id: 9,
    title: "Tuples",
    stage: "core",
    summary: "Compares strings, lists, and tuples through iterability, ordering, indexing, slicing, mutability, concatenation, and operations that only lists allow.",
    practice: ["Classify sequence properties", "Spot immutable operations", "Choose tuple versus list"]
  },
  {
    id: 10,
    title: "Sets",
    stage: "core",
    summary: "Introduces unique unordered collections, set creation, membership, discard versus remove, set operations, and limitations around indexing.",
    practice: ["Explain unordered behavior", "Use union and intersection", "Avoid subscript mistakes"]
  },
  {
    id: 11,
    title: "Dictionaries",
    stage: "core",
    summary: "Covers key-value storage, mutability, nesting, multiple values per key, frequency counting, histograms, and dictionary methods.",
    practice: ["Count character frequency", "Use nested dictionaries", "Avoid position-based access"]
  },
  {
    id: 12,
    title: "Comprehensions",
    stage: "core",
    summary: "Uses list, set, and dictionary comprehensions for compact generation, filtering, nesting, coordinate grids, and transformations.",
    practice: ["Build coordinate pairs", "Filter with conditions", "Rewrite loops compactly"]
  },
  {
    id: 13,
    title: "Functions",
    stage: "core",
    summary: "Practices reusable functions, parameters, return values, dictionaries as results, calculations, scope basics, and testing with sample calls.",
    practice: ["Return multiple counts", "Write numeric helpers", "Separate calculation from printing"]
  },
  {
    id: 14,
    title: "Recursion",
    stage: "core",
    summary: "Explains base cases, recursive calls, stack thinking, tail recursion, and when recursive definitions fit a problem.",
    practice: ["Find the base case", "Trace recursive depth", "Rewrite a loop recursively"]
  },
  {
    id: 15,
    title: "Functional Programming",
    stage: "advanced",
    summary: "Introduces functions as values, lambda expressions, map, filter, reduce, passing functions, returning functions, and composing expressions.",
    practice: ["Use lambda with map", "Filter records", "Reduce values carefully"]
  },
  {
    id: 16,
    title: "Modules and Packages",
    stage: "advanced",
    summary: "Shows module files, package folders, __init__.py, imports, main guards, and writing code that works both as a script and importable module.",
    practice: ["Plan package structure", "Use qualified imports", "Apply the main guard"]
  },
  {
    id: 17,
    title: "Namespaces",
    stage: "advanced",
    summary: "Clarifies symbol tables, global and local scope, nested functions, variable visibility, and name separation.",
    practice: ["Trace nested scope", "Identify global names", "Explain symbol tables"]
  },
  {
    id: 18,
    title: "Classes and Objects",
    stage: "oop",
    summary: "Builds object-oriented basics: classes, objects, attributes, methods, constructors, class data, private-style data, and method calls.",
    practice: ["Create a class model", "Use __init__", "Separate class and instance data"]
  },
  {
    id: 19,
    title: "Intricacies of Classes and Objects",
    stage: "oop",
    summary: "Explores Python's object model, type and address checks, deleting attributes, class methods, instance methods, and operator overloading.",
    practice: ["Map operators to dunder methods", "Inspect object type", "Reason about dynamic attributes"]
  },
  {
    id: 20,
    title: "Containership and Inheritance",
    stage: "oop",
    summary: "Compares composition with inheritance, derived classes, base class access, multiple inheritance, multi-level inheritance, and private-name behavior.",
    practice: ["Choose composition or inheritance", "Trace inherited members", "Model class relationships"]
  },
  {
    id: 21,
    title: "Iterators and Generators",
    stage: "advanced",
    summary: "Connects iterable processing with flattening, generated sequences, custom iteration ideas, generator style, and memory-aware traversal.",
    practice: ["Flatten nested lists", "Generate filtered ranges", "Describe lazy iteration"]
  },
  {
    id: 22,
    title: "Exception Handling",
    stage: "advanced",
    summary: "Distinguishes runtime exceptions from syntax errors and practices try, multiple except blocks, raising, constructors, nesting, and cleanup thinking.",
    practice: ["Catch specific failures", "Raise useful errors", "Explain try flow"]
  },
  {
    id: 23,
    title: "File Input/Output",
    stage: "advanced",
    summary: "Covers opening files, read/write/append modes, text mode, file pointers, overwrite behavior, existence requirements, and structured file tasks.",
    practice: ["Pick file modes", "Read safely", "Write without accidental overwrite"]
  },
  {
    id: 24,
    title: "Miscellany",
    stage: "advanced",
    summary: "Collects command-line arguments, functions as objects, decorators, applying decorators to multiple functions, and flexible function signatures.",
    practice: ["Read sys.argv", "Wrap a function", "Explain decorator behavior"]
  },
  {
    id: 25,
    title: "Concurrency and Parallelism",
    stage: "advanced",
    summary: "Introduces threads, running tasks, thread classes, run versus start, thread names, multiprocessing distinction, and execution-speed expectations.",
    practice: ["Start a thread correctly", "Compare threading and multiprocessing", "Name a running thread"]
  },
  {
    id: 26,
    title: "Synchronization",
    stage: "advanced",
    summary: "Explains shared-state coordination using Lock, RLock, Event, Condition, mutex-like behavior, reader safety, and reentrant-code hazards.",
    practice: ["Choose Lock or RLock", "Use events to coordinate", "Spot unnecessary synchronization"]
  },
  {
    id: 27,
    title: "NumPy Library",
    stage: "advanced",
    summary: "Introduces NumPy installation, arrays versus lists, homogeneous elements, shape changes, equality checks, numeric arrays, and complex values.",
    practice: ["Create arrays", "Compare arrays", "Explain speed and homogeneity"]
  }
];

const quiz = [
  {
    topic: "Getting Started",
    question: "Which mode is best for writing a complete Python program in IDLE?",
    options: ["Script mode", "Interactive mode", "Package mode", "Prompt mode"],
    answer: 0,
    note: "Interactive mode is useful for quick experiments; script mode is for fuller programs."
  },
  {
    topic: "Strings",
    question: "What does slicing mainly help you do with a string?",
    options: ["Extract parts by position", "Change characters in place", "Convert it into a set", "Install a package"],
    answer: 0,
    note: "Strings are immutable, but slices let you read and combine selected parts."
  },
  {
    topic: "Loops",
    question: "What kind of values does Python's built-in range() generate?",
    options: ["Integers", "Floating-point steps", "Dictionaries", "Files"],
    answer: 0,
    note: "range() is integer-based; use another technique for decimal stepping."
  },
  {
    topic: "Sets",
    question: "Why does indexing a set fail?",
    options: ["Sets are unordered", "Sets are always empty", "Sets store only strings", "Sets cannot remove values"],
    answer: 0,
    note: "Sets support membership and set algebra, not position-based access."
  },
  {
    topic: "Functions",
    question: "What is the main value of returning a dictionary from a function?",
    options: ["It can name several related results", "It makes recursion impossible", "It turns local variables global", "It prevents later testing"],
    answer: 0,
    note: "A dictionary can carry labelled results such as counts or grouped totals."
  },
  {
    topic: "Object-Oriented Python",
    question: "When is __init__ called?",
    options: ["When an object is instantiated", "Only when a file is opened", "After every loop iteration", "When a package is installed"],
    answer: 0,
    note: "__init__ initializes a new object after creation begins."
  },
  {
    topic: "Concurrency",
    question: "Which call actually launches a Thread's separate activity?",
    options: ["start()", "run()", "print()", "type()"],
    answer: 0,
    note: "Calling start() asks Python to begin the new thread and then invoke run()."
  },
  {
    topic: "NumPy",
    question: "A NumPy array is typically faster than a list partly because it stores data in what way?",
    options: ["Homogeneous numeric blocks", "Random text dictionaries", "Nested Python prompts", "Only as strings"],
    answer: 0,
    note: "NumPy arrays are optimized around fixed-type, contiguous-style numeric data."
  }
];

const stageLabels = {
  foundation: "Foundation",
  core: "Core Python",
  oop: "OOP",
  advanced: "Advanced"
};

const grid = document.querySelector("#moduleGrid");
const search = document.querySelector("#search");
const filters = document.querySelectorAll(".filter");
const progressCount = document.querySelector("#progressCount");
const progressBar = document.querySelector("#progressBar");
let activeFilter = "all";
let currentQuestion = 0;

const completed = new Set(JSON.parse(localStorage.getItem("lup-completed") || "[]"));

function saveProgress() {
  localStorage.setItem("lup-completed", JSON.stringify([...completed]));
}

function updateProgress() {
  progressCount.textContent = `${completed.size} / ${modules.length}`;
  progressBar.style.width = `${(completed.size / modules.length) * 100}%`;
}

function renderModules() {
  const query = search.value.trim().toLowerCase();
  const visible = modules.filter((module) => {
    const matchesFilter = activeFilter === "all" || module.stage === activeFilter;
    const haystack = `${module.title} ${module.summary} ${module.practice.join(" ")} ${stageLabels[module.stage]}`.toLowerCase();
    return matchesFilter && haystack.includes(query);
  });

  grid.innerHTML = visible.map((module) => `
    <article class="module-card">
      <div class="module-meta">
        <span class="chapter-number">${module.id}</span>
        <span class="tag">${stageLabels[module.stage]}</span>
      </div>
      <h3>${module.title}</h3>
      <p>${module.summary}</p>
      <ul>
        ${module.practice.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <label class="complete-row">
        <input type="checkbox" data-id="${module.id}" ${completed.has(module.id) ? "checked" : ""} />
        Mark module complete
      </label>
    </article>
  `).join("");

  grid.querySelectorAll("input[type='checkbox']").forEach((box) => {
    box.addEventListener("change", (event) => {
      const id = Number(event.target.dataset.id);
      if (event.target.checked) {
        completed.add(id);
      } else {
        completed.delete(id);
      }
      saveProgress();
      updateProgress();
    });
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    activeFilter = button.dataset.filter;
    renderModules();
  });
});

search.addEventListener("input", renderModules);

function renderQuiz() {
  const item = quiz[currentQuestion];
  document.querySelector("#quizTopic").textContent = item.topic;
  document.querySelector("#quizQuestion").textContent = item.question;
  document.querySelector("#quizFeedback").textContent = "";
  document.querySelector("#quizOptions").innerHTML = item.options.map((option, index) => `
    <button type="button" data-index="${index}">${option}</button>
  `).join("");

  document.querySelectorAll("#quizOptions button").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = Number(button.dataset.index);
      const correct = selected === item.answer;
      document.querySelectorAll("#quizOptions button").forEach((optionButton) => {
        optionButton.disabled = true;
        if (Number(optionButton.dataset.index) === item.answer) {
          optionButton.classList.add("correct");
        }
      });
      if (!correct) {
        button.classList.add("incorrect");
      }
      document.querySelector("#quizFeedback").textContent = correct ? `Correct. ${item.note}` : `Not quite. ${item.note}`;
    });
  });
}

document.querySelector("#nextQuestion").addEventListener("click", () => {
  currentQuestion = (currentQuestion + 1) % quiz.length;
  renderQuiz();
});

renderModules();
renderQuiz();
updateProgress();
