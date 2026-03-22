# Cloud services
- In cloud computing, service models define what level of responsibility the cloud provider manages and what the user manages.

# Cloud services (service models) are usually grouped into three main types:

| Type | What it means                |
| ---- | ---------------------------- |
| SaaS | You **use software**         |
| PaaS | You **deploy software**      |
| IaaS | You **build infrastructure** |


SaaS (Software as a Service) – Provides ready-to-use software over the internet (like email apps, document tools, etc.).

IaaS (Infrastructure as a Service) – Provides basic infrastructure like virtual machines, storage, and networking.

PaaS (Platform as a Service) – Provides a platform to build, run, and deploy applications without managing servers.


# SaaS (Software as a service)
- SaaS (Software as a Service) provides ready-to-use software applications over the internet. Users do not install or manage the software on their computers. Everything runs on the provider's servers.

Popular SaaS products:
- Gmail
- Google Docs
- Slack
- Zoom
-Salesforce

You do not manage:
- Servers
- Storage
- Software updates
- Security patches

The provider manages everything.

Responsibilities:

## Cloud Provider Manages
- Application
- Runtime
- Middleware
- Operating system
- Servers
- Networking
- Storage

## User Manages
- User settings
- Data inside the application

# IaaS (Infrastructure as a Service)
IaaS (Infrastructure as a Service) provides basic cloud infrastructure like:
- Virtual machines
- Storage
- Networking
- Load balancers

The cloud provider gives raw infrastructure, and the developer manages the rest.

Responsibilities:
## Cloud Provider Manages
- Physical servers
- Networking
- Storage hardware
- Data center infrastructure

## User Manages:
- Operating system
- Runtime
- Applications
- Security configuration
- Updates

# What “Experience with SaaS” Actually Means in Jobs

When companies mention SaaS experience, they usually mean:

You have experience working with SaaS platforms, such as:
- Oracle Fusion Cloud
- Salesforce
- Workday
- ServiceNow

These are enterprise SaaS products.

Companies don’t build them — they customize and integrate them.

# What Developers Actually Do with SaaS Platforms
Developers usually work on:

1️⃣ Integrations

Connecting SaaS systems with other applications.

Company Web App
      ↓
API Integration
      ↓
Salesforce CRM


Example tasks:
- call SaaS APIs
- sync data between systems
- build middleware

2️⃣ Customization

Enterprise SaaS platforms allow custom workflows and extensions.

Example in Salesforce:
* Developers build:
- custom dashboards
- automated workflows
- custom modules
- reports

3️⃣ API Development

SaaS products expose APIs.

Developers integrate them with applications.

Frontend App
   ↓
Backend API
   ↓
Oracle SaaS API

Tasks include:
- REST APIs
- authentication
- data mapping

4️⃣ Data Integration

Many companies move data between systems.

HR System (Workday)
        ↓
Integration Service
        ↓
Company Database

Developers build:
- ETL pipelines
- scheduled data sync jobs

# What “PaaS Knowledge” Means
When job posts say PaaS knowledge, they mean you know how to deploy applications on a cloud platform.

Example PaaS platforms:
- Oracle Corporation Oracle Cloud Platform
- Amazon Web Services Elastic Beanstalk
- Google Cloud Platform App Engine

Developers work on:
- Deploy applications
- Configure environments
- Scale applications
- Manage application runtime

Example:
Push code → platform deploys app automatically

# What “Instance Planning Knowledge” Means
This is more DevOps / cloud architecture.

It means understanding:
- How many servers to run
- How much memory
- How many CPUs
- Auto-scaling setup
- Cost optimization

Example:
Small app → 1 server
Growing app → load balancer + multiple instances
Large system → auto-scaling infrastructure