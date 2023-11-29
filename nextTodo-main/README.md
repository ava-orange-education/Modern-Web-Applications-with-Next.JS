<h1>NextTodo App Readme</h1>
<p>NextTodo is a simple to-do list application that uses the Prism library for Xamarin.Forms and SQLite for data storage. It allows users to add tasks to their to-do list and mark them as completed.</p>

<h2>Features</h2>
<ul>
    <li>Add new tasks to your to-do list.</li>
    <li>Mark tasks as completed by tapping on them.</li>
    <li>View a list of all tasks, with completed tasks visually distinguished.</li>
</ul>

<h2>Installation</h2>
<p>To get started with NextTodo, follow these steps:</p>
<ol>
    <li>Clone the NextTodo repository to your local machine:</li>
</ol>
<code>git clone https://github.com/pro-shubham-jain/nextTodo.git</code>

<h2>Usage</h2>
<ol>
    <li>Launch the NextTodo app on your device.</li>
    <li>You will see a blank to-do list initially.</li>
    <li>To add a new task:
        <ul>
            <li>Tap on the "NEW" button at the top of the screen.</li>
            <li>Enter the task description in the provided input field.</li>
            <li>Tap the "Add" button to add the task to the list.</li>
        </ul>
    </li>
    <li>To mark a task as completed:
        <ul>
            <li>Tap on the task you want to mark as completed.</li>
        </ul>
    </li>
    <li>To view completed tasks:
        <ul>
            <li>Tap on the "Show Completed" button at the bottom of the screen. Completed tasks will be displayed with a strike-through text.</li>
        </ul>
    </li>
    <li>To hide completed tasks and show all tasks again:
        <ul>
            <li>Tap on the "Hide Completed" button at the bottom of the screen.</li>
        </ul>
    </li>
</ol>

<h2>Data Storage</h2>
<p>NextTodo uses SQLite for data storage. All tasks and their completion status are saved locally on your device.</p>

<h2>Acknowledgments</h2>
<p>This app was built using the Prism library and SQLite for Xamarin.Forms. We would like to thank the open-source community for their contributions to these libraries.</p>

<h2> Getting Started </h2>

<p>First, run the development server:</p>
<code>
npm run dev
# or
yarn dev
# or
pnpm dev
</code>