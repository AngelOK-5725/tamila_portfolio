from django.shortcuts import render

# Create your views here.
def index(request):
    """
    Renders the main resume-portfolio index page with bilingual context.
    We deliver the text dictionary so Python rendering is fully supported,
    but we also pair this with seamless vanilla JavaScript localization
    for an ultra-smooth, no-reload, premium transition experience!
    """
    context = {
        'name': 'Tamila Khamraeva',
        'age': 20,
        'location': 'Almaty, Kazakhstan',
        'roles': [
            'QA Engineer',
            'Python Developer',
            'Backend-minded Problem Solver'
        ],
        'tech_stack': [
            'Python', 'Django', 'Git', 'HTML', 'CSS', 'JavaScript basics',
            'JSON', 'SQLite', 'REST API', 'Manual Testing', 'Functional Testing',
            'Regression Testing', 'UI/UX Testing', 'Test Cases', 'Bug Reporting',
            'DevTools', 'Figma'
        ],
        'meta_description': 'Premium cinematic resume portfolio website of Tamila Khamraeva, IT Specialist, QA Engineer & Python Developer.'
    }
    return render(request, 'index.html', context)
