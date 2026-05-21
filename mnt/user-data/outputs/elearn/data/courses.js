const courses = [
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    slug: 'javascript-fundamentals',
    description: 'Master the core concepts of JavaScript from variables to async programming.',
    longDescription: 'This comprehensive course takes you from zero to proficient in JavaScript. You\'ll learn variables, data types, functions, arrays, objects, DOM manipulation, and modern ES6+ features with hands-on exercises.',
    category: 'Programming',
    level: 'Beginner',
    duration: '6 hours',
    lessons: 8,
    instructor: 'Sarah Chen',
    color: '#f59e0b',
    icon: '⚡',
    tags: ['JavaScript', 'Web Dev', 'ES6'],
    lessonList: [
      {
        id: 'js-1', title: 'Variables & Data Types', duration: '20 min', type: 'lesson',
        content: `<h2>Variables & Data Types</h2>
<p>JavaScript has three ways to declare variables: <code>var</code>, <code>let</code>, and <code>const</code>.</p>
<h3>let and const (Modern JS)</h3>
<pre><code>let name = "Alice";       // can be reassigned
const PI = 3.14159;       // cannot be reassigned
let age = 25;
let isStudent = true;</code></pre>
<h3>Data Types</h3>
<ul>
  <li><strong>String</strong>: Text values — <code>"hello"</code>, <code>'world'</code></li>
  <li><strong>Number</strong>: Integers and decimals — <code>42</code>, <code>3.14</code></li>
  <li><strong>Boolean</strong>: True or false — <code>true</code>, <code>false</code></li>
  <li><strong>null</strong>: Intentional absence of value</li>
  <li><strong>undefined</strong>: Variable declared but not assigned</li>
  <li><strong>Array</strong>: Ordered list — <code>[1, 2, 3]</code></li>
  <li><strong>Object</strong>: Key-value pairs — <code>{ name: "Alice" }</code></li>
</ul>
<h3>Type Checking</h3>
<pre><code>typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"</code></pre>`,
        quiz: {
          question: 'Which keyword creates a variable that CANNOT be reassigned?',
          options: ['var', 'let', 'const', 'static'],
          answer: 2
        }
      },
      {
        id: 'js-2', title: 'Functions', duration: '25 min', type: 'lesson',
        content: `<h2>Functions in JavaScript</h2>
<p>Functions are reusable blocks of code. JavaScript has several ways to define them.</p>
<h3>Function Declaration</h3>
<pre><code>function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice")); // "Hello, Alice!"</code></pre>
<h3>Arrow Functions (ES6)</h3>
<pre><code>const add = (a, b) => a + b;
const square = n => n * n;
const sayHi = () => "Hi there!";</code></pre>
<h3>Default Parameters</h3>
<pre><code>function greet(name = "stranger") {
  return \`Hello, \${name}!\`;
}
greet();        // "Hello, stranger!"
greet("Bob");   // "Hello, Bob!"</code></pre>
<h3>Higher-Order Functions</h3>
<pre><code>const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);</code></pre>`,
        quiz: {
          question: 'What is the correct arrow function syntax for adding two numbers?',
          options: ['function(a, b) => a + b', 'const add = (a, b) => a + b', 'const add = a, b -> a + b', 'add(a, b) { return a + b }'],
          answer: 1
        }
      },
      {
        id: 'js-3', title: 'Arrays & Objects', duration: '30 min', type: 'lesson',
        content: `<h2>Arrays & Objects</h2>
<h3>Arrays</h3>
<pre><code>const fruits = ["apple", "banana", "cherry"];
fruits.push("date");       // add to end
fruits.pop();              // remove from end
fruits.unshift("avocado"); // add to start
const sliced = fruits.slice(1, 3); // extract portion</code></pre>
<h3>Array Methods</h3>
<pre><code>const nums = [3, 1, 4, 1, 5, 9, 2, 6];
nums.sort((a, b) => a - b);  // sort ascending
const found = nums.find(n => n > 4);     // first match
const allBig = nums.every(n => n > 0);   // test all
const someBig = nums.some(n => n > 8);   // test any</code></pre>
<h3>Objects</h3>
<pre><code>const person = {
  name: "Alice",
  age: 30,
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};
// Destructuring
const { name, age } = person;
// Spread operator
const updated = { ...person, age: 31 };</code></pre>`,
        quiz: {
          question: 'Which method adds an element to the END of an array?',
          options: ['unshift()', 'push()', 'append()', 'insert()'],
          answer: 1
        }
      },
      {
        id: 'js-4', title: 'Async JavaScript', duration: '35 min', type: 'lesson',
        content: `<h2>Async JavaScript</h2>
<p>JavaScript is single-threaded but handles async operations with Promises and async/await.</p>
<h3>Promises</h3>
<pre><code>const fetchData = new Promise((resolve, reject) => {
  setTimeout(() => resolve("data received"), 1000);
});
fetchData.then(data => console.log(data))
         .catch(err => console.error(err));</code></pre>
<h3>Async/Await</h3>
<pre><code>async function getUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Failed:", error);
  }
}</code></pre>
<h3>Promise.all</h3>
<pre><code>const [users, posts] = await Promise.all([
  fetch("/api/users").then(r => r.json()),
  fetch("/api/posts").then(r => r.json())
]);</code></pre>`,
        quiz: {
          question: 'What keyword makes a function return a Promise automatically?',
          options: ['promise', 'await', 'async', 'then'],
          answer: 2
        }
      }
    ]
  },
  {
    id: 2,
    title: 'UI/UX Design Principles',
    slug: 'ui-ux-design',
    description: 'Learn the principles of great user interface and experience design.',
    longDescription: 'Dive into the world of UI/UX design. Understand color theory, typography, layout grids, user psychology, prototyping, and how to design interfaces that users love.',
    category: 'Design',
    level: 'Intermediate',
    duration: '5 hours',
    lessons: 6,
    instructor: 'Marcus Williams',
    color: '#8b5cf6',
    icon: '🎨',
    tags: ['Design', 'UX', 'Figma'],
    lessonList: [
      {
        id: 'ux-1', title: 'Design Thinking', duration: '20 min', type: 'lesson',
        content: `<h2>Design Thinking</h2>
<p>Design thinking is a human-centered approach to innovation that integrates user needs, business requirements, and technological possibilities.</p>
<h3>The 5 Stages</h3>
<ol>
  <li><strong>Empathize</strong>: Research your users' needs deeply</li>
  <li><strong>Define</strong>: State your users' needs and problems clearly</li>
  <li><strong>Ideate</strong>: Challenge assumptions and create ideas</li>
  <li><strong>Prototype</strong>: Start to create solutions</li>
  <li><strong>Test</strong>: Try your solutions out</li>
</ol>
<h3>User Research Methods</h3>
<ul>
  <li>User interviews — direct conversations with users</li>
  <li>Surveys — quantitative data collection</li>
  <li>Usability testing — observe users with your product</li>
  <li>Card sorting — understand mental models</li>
  <li>Contextual inquiry — observe users in their environment</li>
</ul>
<h3>Key Principle</h3>
<p>Always design for the user, not for yourself. Your assumptions about user behavior are often wrong — validate with real data.</p>`,
        quiz: {
          question: 'What is the FIRST stage of the Design Thinking process?',
          options: ['Define', 'Prototype', 'Empathize', 'Ideate'],
          answer: 2
        }
      },
      {
        id: 'ux-2', title: 'Color Theory', duration: '25 min', type: 'lesson',
        content: `<h2>Color Theory in UI Design</h2>
<h3>The Color Wheel</h3>
<p>Colors are organized in primary (red, yellow, blue), secondary, and tertiary groups. Understanding relationships helps create harmonious palettes.</p>
<h3>Color Harmonies</h3>
<ul>
  <li><strong>Complementary</strong>: Opposite colors (blue & orange) — high contrast</li>
  <li><strong>Analogous</strong>: Adjacent colors (blue, blue-green, green) — harmonious</li>
  <li><strong>Triadic</strong>: Three evenly spaced colors — vibrant and balanced</li>
  <li><strong>Monochromatic</strong>: Shades of one color — elegant and subtle</li>
</ul>
<h3>Color Psychology</h3>
<ul>
  <li>🔵 <strong>Blue</strong>: Trust, calm, professionalism (banks, tech)</li>
  <li>🟢 <strong>Green</strong>: Nature, growth, success (finance, health)</li>
  <li>🔴 <strong>Red</strong>: Urgency, passion, danger (sales, food)</li>
  <li>🟡 <strong>Yellow</strong>: Optimism, warmth, attention</li>
  <li>🟣 <strong>Purple</strong>: Luxury, creativity, wisdom</li>
</ul>
<h3>Accessibility</h3>
<p>Ensure 4.5:1 contrast ratio for normal text (WCAG AA standard). Never rely on color alone to convey information.</p>`,
        quiz: {
          question: 'Which color harmony uses colors directly opposite on the color wheel?',
          options: ['Analogous', 'Triadic', 'Monochromatic', 'Complementary'],
          answer: 3
        }
      },
      {
        id: 'ux-3', title: 'Typography', duration: '20 min', type: 'lesson',
        content: `<h2>Typography in UI Design</h2>
<h3>Type Classifications</h3>
<ul>
  <li><strong>Serif</strong>: Traditional, authoritative (Times New Roman, Georgia)</li>
  <li><strong>Sans-serif</strong>: Modern, clean (Helvetica, Roboto)</li>
  <li><strong>Monospace</strong>: Code, technical (Courier, Fira Code)</li>
  <li><strong>Display</strong>: Decorative, headlines only</li>
</ul>
<h3>Type Hierarchy</h3>
<p>Create clear visual hierarchy with:</p>
<ul>
  <li>Size contrast (H1 vs body text)</li>
  <li>Weight contrast (bold vs regular)</li>
  <li>Color contrast (dark vs muted)</li>
  <li>Spacing (generous line-height improves readability)</li>
</ul>
<h3>The Golden Rules</h3>
<ul>
  <li>Limit to 2-3 typefaces per design</li>
  <li>Body text: 16-18px minimum on screens</li>
  <li>Line height: 1.4–1.6× font size</li>
  <li>Line length: 50–75 characters optimal</li>
</ul>`,
        quiz: {
          question: 'What is the recommended minimum body text size for screen readability?',
          options: ['10px', '12px', '14px', '16px'],
          answer: 3
        }
      }
    ]
  },
  {
    id: 3,
    title: 'Data Science with Python',
    slug: 'data-science-python',
    description: 'Analyze data, build models, and create visualizations with Python.',
    longDescription: 'Learn pandas, NumPy, Matplotlib, and scikit-learn to perform real-world data analysis and build machine learning models. From data cleaning to predictive modeling.',
    category: 'Data Science',
    level: 'Advanced',
    duration: '8 hours',
    lessons: 10,
    instructor: 'Dr. Priya Patel',
    color: '#10b981',
    icon: '📊',
    tags: ['Python', 'ML', 'Pandas'],
    lessonList: [
      {
        id: 'ds-1', title: 'NumPy Basics', duration: '30 min', type: 'lesson',
        content: `<h2>NumPy Basics</h2>
<p>NumPy is the foundation of scientific computing in Python, providing fast array operations.</p>
<h3>Creating Arrays</h3>
<pre><code>import numpy as np

a = np.array([1, 2, 3, 4, 5])
b = np.zeros((3, 4))          # 3x4 matrix of zeros
c = np.ones((2, 2))           # 2x2 matrix of ones
d = np.arange(0, 10, 2)       # [0, 2, 4, 6, 8]
e = np.linspace(0, 1, 5)      # 5 evenly spaced points</code></pre>
<h3>Array Operations</h3>
<pre><code>x = np.array([1, 2, 3])
y = np.array([4, 5, 6])

x + y          # [5, 7, 9]
x * y          # [4, 10, 18]
np.dot(x, y)   # 32 (dot product)
x ** 2         # [1, 4, 9]</code></pre>
<h3>Statistical Functions</h3>
<pre><code>data = np.random.randn(1000)  # 1000 random values
np.mean(data)      # mean
np.std(data)       # standard deviation
np.median(data)    # median
np.percentile(data, 95)  # 95th percentile</code></pre>`,
        quiz: {
          question: 'Which NumPy function creates an array of evenly spaced values between two numbers?',
          options: ['np.arange()', 'np.range()', 'np.linspace()', 'np.space()'],
          answer: 2
        }
      },
      {
        id: 'ds-2', title: 'Pandas DataFrames', duration: '40 min', type: 'lesson',
        content: `<h2>Pandas DataFrames</h2>
<p>Pandas provides powerful data structures for data manipulation and analysis.</p>
<h3>Creating DataFrames</h3>
<pre><code>import pandas as pd

df = pd.DataFrame({
  'name': ['Alice', 'Bob', 'Charlie'],
  'age': [25, 30, 35],
  'salary': [70000, 85000, 95000]
})

# From CSV
df = pd.read_csv('data.csv')
df = pd.read_excel('data.xlsx')</code></pre>
<h3>Data Exploration</h3>
<pre><code>df.head()          # first 5 rows
df.tail(10)        # last 10 rows
df.info()          # column types & nulls
df.describe()      # statistical summary
df.shape           # (rows, columns)</code></pre>
<h3>Filtering & Selection</h3>
<pre><code>df[df['age'] > 28]              # filter rows
df[['name', 'salary']]          # select columns
df.loc[0:2, 'name':'age']       # label-based
df.query('salary > 80000')      # SQL-like queries</code></pre>`,
        quiz: {
          question: 'Which Pandas method shows a statistical summary of numeric columns?',
          options: ['df.info()', 'df.summary()', 'df.describe()', 'df.stats()'],
          answer: 2
        }
      },
      {
        id: 'ds-3', title: 'Data Visualization', duration: '35 min', type: 'lesson',
        content: `<h2>Data Visualization with Matplotlib</h2>
<pre><code>import matplotlib.pyplot as plt
import seaborn as sns

# Line chart
plt.plot(x, y, color='blue', linewidth=2)
plt.title('Sales Over Time')
plt.xlabel('Month')
plt.ylabel('Sales')
plt.show()

# Bar chart
plt.bar(categories, values, color='#4f46e5')

# Scatter plot
plt.scatter(x, y, c=colors, s=sizes, alpha=0.6)

# Histogram
plt.hist(data, bins=30, edgecolor='black')

# Seaborn heatmap
sns.heatmap(corr_matrix, annot=True, cmap='coolwarm')</code></pre>
<h3>Best Practices</h3>
<ul>
  <li>Always label axes and add a title</li>
  <li>Use color intentionally — don't use rainbow palettes</li>
  <li>Choose the right chart type for your data</li>
  <li>Avoid chart junk — keep it simple</li>
  <li>Consider colorblind-friendly palettes</li>
</ul>`,
        quiz: {
          question: 'Which library is built on top of Matplotlib and provides a higher-level interface?',
          options: ['Plotly', 'Bokeh', 'Seaborn', 'Altair'],
          answer: 2
        }
      }
    ]
  },
  {
    id: 4,
    title: 'Node.js & REST APIs',
    slug: 'nodejs-rest-apis',
    description: 'Build scalable backend services and REST APIs with Node.js and Express.',
    longDescription: 'Go from Node.js basics to building production-ready REST APIs. Learn Express, middleware, authentication, databases, error handling, and deployment best practices.',
    category: 'Backend',
    level: 'Intermediate',
    duration: '7 hours',
    lessons: 9,
    instructor: 'James Okonkwo',
    color: '#ef4444',
    icon: '🚀',
    tags: ['Node.js', 'Express', 'API'],
    lessonList: [
      {
        id: 'node-1', title: 'Express Routing', duration: '25 min', type: 'lesson',
        content: `<h2>Express Routing</h2>
<p>Express makes it simple to define routes and handle HTTP requests.</p>
<h3>Basic Routes</h3>
<pre><code>const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello World'));
app.post('/users', (req, res) => { /* create user */ });
app.put('/users/:id', (req, res) => { /* update user */ });
app.delete('/users/:id', (req, res) => { /* delete user */ });</code></pre>
<h3>Route Parameters</h3>
<pre><code>app.get('/users/:id/posts/:postId', (req, res) => {
  const { id, postId } = req.params;
  res.json({ userId: id, postId });
});</code></pre>
<h3>Router Modules</h3>
<pre><code>// routes/users.js
const router = express.Router();
router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getUserById);
module.exports = router;

// server.js
app.use('/api/users', require('./routes/users'));</code></pre>`,
        quiz: {
          question: 'Which HTTP method is conventionally used to UPDATE an existing resource?',
          options: ['GET', 'POST', 'PUT', 'DELETE'],
          answer: 2
        }
      },
      {
        id: 'node-2', title: 'Middleware', duration: '30 min', type: 'lesson',
        content: `<h2>Express Middleware</h2>
<p>Middleware functions have access to req, res, and next. They run in sequence before the final route handler.</p>
<h3>Custom Middleware</h3>
<pre><code>// Logger middleware
const logger = (req, res, next) => {
  console.log(\`\${req.method} \${req.url} - \${new Date().toISOString()}\`);
  next(); // pass control to next middleware
};

app.use(logger);</code></pre>
<h3>Authentication Middleware</h3>
<pre><code>const requireAuth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(403).json({ error: 'Invalid token' });
  }
};

// Apply to specific routes
app.get('/profile', requireAuth, getProfile);</code></pre>
<h3>Error Handling Middleware</h3>
<pre><code>app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});</code></pre>`,
        quiz: {
          question: 'What must a middleware call to pass control to the next middleware?',
          options: ['res.send()', 'return()', 'next()', 'continue()'],
          answer: 2
        }
      }
    ]
  }
];

function getCourses() { return courses; }
function getCourseBySlug(slug) { return courses.find(c => c.slug === slug); }
function getCourseById(id) { return courses.find(c => c.id === parseInt(id)); }
function getLessonById(courseSlug, lessonId) {
  const course = getCourseBySlug(courseSlug);
  if (!course) return null;
  return course.lessonList.find(l => l.id === lessonId);
}

module.exports = { getCourses, getCourseBySlug, getCourseById, getLessonById };
