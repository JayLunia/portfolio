$(document).ready(function () {

	// Variables
	const colors = ["#FF5733","#FFC300","#FF0066","#00FF66","#FF66B2","#FF3333","#FF9933", "#CC33FF","#99FF33","#FF3399","#00FFCC","#FF99CC","#99FF66","#FF66FF","#FFCC00","#F77321"
	]

	const education = [
		{
			title: 'Diploma in Web Development',
			time: '2021-2021',
			marks: 'A+',
			tag: 'dip'
		},
		{
			title: 'Diploma In data analysis',
			time: '2022-2023',
			marks: 'A+',
			tag: 'Dip'
		},
		{
			title: 'BSc.IT VNSGU',
			time: '2020-2023',
			marks: 86.3,
			tag: 'G'
		},

		{
			title: 'Diploma in Deep Learning',
			time: '2023-2023',
			marks: 'A+',
			tag: 'Dip'
		},
		{
			title: 'Applied ML and AI',
			time: '2023-2024',
			marks: '-',
			tag: 'PG'
		}
	]

	const courses = [
		{
			title: 'HTML & CSS',
			from: 'Spoken Tutorial project at IIT bombay'
		},
		{
			title: 'Fundamental of Digital Marketing',
			from: 'Google'
		},
		{
			title: 'Advance Excel',
			from: 'Udemy'
		},
		{
			title: 'Introduction to Computer',
			from: 'Spoken Tutorial project at IIT bombay'
		},
		{
			title: 'Fondations of Business Intelligence',
			from: 'Coursera'
		},
		{
			title: 'Data Science',
			from: 'Udemy'
		},
		{
			title: 'R programming For Data Analysis',
			from: 'Udemy'
		},
		{
			title: 'Big Data and ML fundamentals',
			from: 'Google'
		}

	]

	const projects = [
		{
			title: 'Whatsapp chat Analyzer',
			desc: 'This app gives you a breif summary of your group or individual whatsapp chats.',
			img: './assets/img/whatsapp_chat_analyzer.webp',
			link: 'https://github.com/JayLunia/whatsapp-chat-Analyzer'

		},
		{
			title: 'Bengaluru House Price Prediction',
			desc: 'This is a linear regression project The website is build on flask',
			img: './assets/img/Bengaluru-House-Price-Prediction.png',
			link: 'https://github.com/JayLunia/Bengaluru-House-Price-Prediction'

		},
		{
			title: 'SMS spam detection',
			desc: 'This project is an flask based website which classifies wheather the given SMS is spam or ham using naive bayes based ML model and NPL for text pre-precessing',
			img: './assets/img/SMS-spam-detection-website.jpeg',
			link: 'https://github.com/JayLunia/SMS-spam-detection-website'

		},
		{
			title: 'Movie Recommendation System',
			desc: 'This project is based on Natural Language Proccessing (content based).',
			img: './assets/img/Movie-Recommendation-System.jpg',
			link: 'https://github.com/JayLunia/Movie-Recommendation-System'

		},
		{
			title: 'Book recommendation System',
			desc: 'This project is based on Unsupervised Machine Learning model (NearestNeighbors clustering).',
			img: './assets/img/Book-recommendation-System.jpg',
			link: 'https://github.com/JayLunia/Book-recommendation-System'

		},
		{
			title: 'wine Quality prediction',
			desc: 'TThis is a flask api based website which predicts if the qualityof wine is good or not good. (Classification Model)',
			img: './assets/img/wine-prediction.jpeg',
			link: 'https://github.com/JayLunia/wine-prediction'

		},
		{
			title: 'music Recommendation System',
			desc: 'This is a content based recommendation system (using cosine similarity).',
			img: './assets/img/music-recommendation.png',
			link: 'https://github.com/JayLunia/music-recommendation'

		},
	]

	const skills = {
		Languages: [
			{
				title: 'python',
				cat: 'Language',
				icon: '<i class="fa-solid fa-code"></i>'
			},
			{
				title: 'C',
				cat: 'Language',
				icon: '<i class="fa-solid fa-code"></i>'
			},
			{
				title: 'C++',
				cat: 'Language',
				icon: '<i class="fa-solid fa-code"></i>'
			},
			{
				title: 'PHP',
				cat: 'Language',
				icon: '<i class="fa-solid fa-code"></i>'
			},
			{
				title: 'PHP',
				cat: 'Language',
				icon: '<i class="fa-solid fa-code"></i>'
			},
			{
				title: 'JavaScript',
				cat: 'Language',
				icon: '<i class="fa-solid fa-code"></i>'
			},
			{
				title: 'R Programming',
				cat: 'Language',
				icon: '<i class="fa-solid fa-code"></i>'
			}
		]

		,
		database: [
			{
				title: 'MongoDB',
				cat: 'Database',
				icon: '<i class="fa-solid fa-database"></i>'
			},
			{
				title: 'NoSQL',
				cat: 'Database',
				icon: '<i class="fa-solid fa-database"></i>'
			},
			{
				title: 'Oracle',
				cat: 'Database',
				icon: '<i class="fa-solid fa-database"></i>'
			}
		],
		Framework: [
			{
				title: 'Flask',
				cat: 'Framework',
				icon: '<i class="fa-brands fa-free-code-camp"></i>'
			},
			{
				title: 'Django',
				cat: 'Framework',
				icon: '<i class="fa-brands fa-free-code-camp"></i>'
			},
			{
				title: 'TensorFlow',
				cat: 'Framework',
				icon: '<i class="fa-brands fa-free-code-camp"></i>'
			},
			{
				title: 'Keras',
				cat: 'Framework',
				icon: '<i class="fa-brands fa-free-code-camp"></i>'
			},
			{
				title: 'PyTorch',
				cat: 'Framework',
				icon: '<i class="fa-brands fa-free-code-camp"></i>'
			},
			{
				title: 'Git',
				cat: 'Framework',
				icon: '<i class="fa-brands fa-free-code-camp"></i>'
			},
			{
				title: 'GitHub',
				cat: 'Framework',
				icon: '<i class="fa-brands fa-free-code-camp"></i>'
			},
			{
				title: 'Wordpress',
				cat: 'Framework',
				icon: '<i class="fa-brands fa-free-code-camp"></i>'
			}
		]
		,
		Analysis: [
			{
				title: 'Power BI',
				cat: 'Analysis',
				icon: '<i class="fa-solid fa-chart-pie"></i>'
			},
			{
				title: 'Google Analytics',
				cat: 'Analysis',
				icon: '<i class="fa-solid fa-chart-pie"></i>'
			},
			{
				title: 'Tableau',
				cat: 'Analysis',
				icon: '<i class="fa-solid fa-chart-pie"></i>'
			},
			{
				title: 'Excel',
				cat: 'Analysis',
				icon: '<i class="fa-solid fa-chart-pie"></i>'
			}
		]
		,

		'ML and AI': [
			{
				title: 'Regression',
				cat: 'ML and AL',
				icon: '<i class="fa-solid fa-code-branch"></i>'
			},
			{
				title: 'Regression',
				cat: 'ML and AL',
				icon: '<i class="fa-solid fa-code-branch"></i>'
			},
			{
				title: 'Classification',
				cat: 'ML and AL',
				icon: '<i class="fa-solid fa-code-branch"></i>'
			},
			{
				title: 'Random Forest',
				cat: 'ML and AL',
				icon: '<i class="fa-solid fa-code-branch"></i>'
			},
			{
				title: 'ARIMA',
				cat: 'ML and AL',
				icon: '<i class="fa-solid fa-code-branch"></i>'
			},
			{
				title: 'XGBoost',
				cat: 'ML and AL',
				icon: '<i class="fa-solid fa-code-branch"></i>'
			},
			{
				title: 'SVM',
				cat: 'ML and AL',
				icon: '<i class="fa-solid fa-code-branch"></i>'
			},
			{
				title: 'K-Neighbors',
				cat: 'ML and AL',
				icon: '<i class="fa-solid fa-code-branch"></i>'
			},
			{
				title: 'Clustering',
				cat: 'ML and AL',
				icon: '<i class="fa-solid fa-code-branch"></i>'
			},
			{
				title: 'SVM',
				cat: 'ML and AL',
				icon: '<i class="fa-solid fa-code-branch"></i>'
			},
			{
				title: 'AdaBoost',
				cat: 'ML and AL',
				icon: '<i class="fa-solid fa-code-branch"></i>'
			},
			{
				title: 'LSTM',
				cat: 'ML and AL',
				icon: '<i class="fa-solid fa-code-branch"></i>'
			},
			{
				title: 'RNN',
				cat: 'ML and AL',
				icon: '<i class="fa-solid fa-code-branch"></i>'
			},
			{
				title: 'CNN',
				cat: 'ML and AL',
				icon: '<i class="fa-solid fa-code-branch"></i>'
			},
			{
				title: 'Transfer Learning',
				cat: 'ML and AL',
				icon: '<i class="fa-solid fa-code-branch"></i>'
			}
		]
		,
		Libraries: [
			{
				title: 'Sckit-Learn',
				cat: 'Libraries',
				icon: '<i class="fa-solid fa-book"></i>'
			},
			{
				title: 'pandas',
				cat: 'Libraries',
				icon: '<i class="fa-solid fa-book"></i>'
			},
			{
				title: 'Numpy',
				cat: 'Libraries',
				icon: '<i class="fa-solid fa-book"></i>'
			},
			{
				title: 'Seaborn',
				cat: 'Libraries',
				icon: '<i class="fa-solid fa-book"></i>'
			},
			{
				title: 'Matplotlib',
				cat: 'Libraries',
				icon: '<i class="fa-solid fa-book"></i>'
			},
			{
				title: 'plotly',
				cat: 'Libraries',
				icon: '<i class="fa-solid fa-book"></i>'
			},
			{
				title: 'OpenCV',
				cat: 'Libraries',
				icon: '<i class="fa-solid fa-book"></i>'
			}
		]
	};

	const words = [" Web Developer.", " Freelancer.", " Coder.", " Developer", " Data Analyst.", " ML Engineer."];


	// Function calling
	TimelineEdu();
	TimelineCourse();
	ProjectList();
	SkillsList();

	// Functions

	// For channging colors
	function getRandomColor() {
		let color = colors[Math.floor(Math.random() * colors.length)];
		return color;
	}

	$(':root').css('--all', color = getRandomColor());


	//   Making typing effects

	let i = 0;
	let timer;

	function typingEffect() {
		let word = words[i].split("");
		var loopTyping = function () {
			if (word.length > 0) {
				document.getElementById('word').innerHTML += word.shift();
			} else {
				deletingEffect();
				return false;
			};
			timer = setTimeout(loopTyping, 200);
		};
		loopTyping();
	};

	function deletingEffect() {
		let word = words[i].split("");
		var loopDeleting = function () {
			if (word.length > 0) {
				word.pop();
				document.getElementById('word').innerHTML = word.join("");
			} else {
				if (words.length > (i + 1)) {
					i++;
				} else {
					i = 0;
				};
				typingEffect();
				return false;
			};
			timer = setTimeout(loopDeleting, 100);
		};
		loopDeleting();
	};

	typingEffect();


	// Education timeline
	function TimelineEdu() {

		let code = ``;
		for (let i of education) {
			code += `
			<li class="timeline-inverted rounded">
                      <div class="timeline-badge">${i['tag']}</div>
                      <div class="timeline-panel rounded p-3 ms-5">
                        <div class="timeline-heading">
                          <h4 class="timeline-title">${i['title']}</h4>
                          <p><small class="text-white m-0"><i class="fa-solid
                                fa-calendar-days pe-3"></i>${i['time']}</small></p>
                        </div>
                        <div class="timeline-body fw-bold">
                          <p>Secured ${i['marks']}</p>
                        </div>
                      </div>
                    </li>
			`

		}
		code += `
		<li class="timeline-inverted rounded">
                        <div class="timeline-badge"><a class="text-white"
                            href="#education"><i class="fa-solid fa-arrow-up"></i></a></div>
        </li>
		`

		$('#edu-timeline').html(code);
	}

	// Course Timelime
	function TimelineCourse() {
		let code = ``

		for (let i of courses) {
			code += `
			<li class="timeline-inverted rounded">
                        <div class="timeline-badge"><i class="fa-regular
                            fa-star"></i></div>
                        <div class="timeline-panel rounded p-3 ms-5">
                          <div class="timeline-heading">
                            <h4 class="timeline-title">${i['title']}</h4>
                            <p><small class="text-white m-0"><i class="fa-solid
                                  fa-building-columns pe-3"></i>${i['from']}</small></p>
                          </div>
                        </div>
                      </li>
			`
		}
		code += `
		<li class="timeline-inverted rounded">
                        <div class="timeline-badge"><a class="text-white"
                            href="#courses"><i class="fa-solid fa-arrow-up"></i></a></div>
        </li>
		`
		$('#course-timeline').html(code);


	}

	//  Projects
	function ProjectList() {
		let code = ``;
		for (let i of projects) {
			code += `
			<div class="col">
			<div class="proj rounded-3">
                    <img src="${i['img']}" class='rounded-3' alt="${i['title']}">
                    <div class="p-3 text-white rounded-3 work text-left">
                      <div class="work-content">
                        <h2 class="text-all">${i['title'].slice(0, 20)} </h2>
                        <p>${i['desc'].slice(0, 50)}</p>
                        <a href="${i['link']}" class="btn btn-outline-dark" type="button">See Project</a>
                      </div>
                    </div>
                  </div>
				</div>
			`
		}

		$('#projects').html(code);
	}

	// Skills
	function SkillsList() {
		let code = ``;
		for (let i in skills) {
			
			code += `<h2 class="bg-all text-center text-white p-3 mx-2 mt-5">${i}</h2>
			<div class="row mt-3 p-1 row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xxl-3
			text-white g-3 g-lg-4 skills">
			`
			for (let skill of skills[i]) {
				code += `
					<div class="col">
						<div class="d-flex align-items-start shadow
											bg-dark p-3 rounded">
							<div class="bg-all text-dark
												d-inline-flex align-items-center
												justify-content-center fs-2
												flex-shrink-0
												me-3 rounded  text-white p-3">
												${skill['icon']}
							</div>
							<div>
								<h3 class="text-all">${skill['title']}</h3>
										<a href="portfolio.html" class="text-white
													fs-5">
													See Projects!!
										</a>
							</div>
						</div>
					</div>
				`
			}

			code += `</div>`
		}

		$('#skills').html(code);
	}

})

