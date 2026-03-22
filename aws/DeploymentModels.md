# Deployment Model

A deployment model in cloud computing describes how and where cloud infrastructure is set up and who has access to it.

A deployment model defines the environment in which cloud services are deployed and how the cloud resources are shared, managed, and accessed.

# Simple Explanation

A deployment model tells us:

Where the servers are located

Who owns the infrastructure

Who can access the cloud resources

How the cloud is managed

# Example

If a company builds an application, it must decide where the application will run:

Option 1 → On shared cloud servers (Public Cloud)

Option 2 → On company-owned servers (Private Cloud)

Option 3 → Combination of both (Hybrid Cloud)

These options are called deployment models.

# Types of Cloud Deployment Models

# Public Cloud

Cloud infrastructure owned by a cloud provider and shared by multiple users over the internet.
The infrastructure is shared among multiple organizations, but each customer’s data is logically isolated.

Example providers:

Amazon Web Services

Microsoft Azure

Google Cloud Platform

A company does not own the servers. Instead they:

Rent computing power

Pay only for what they use

Scale resources whenever needed

Example

A startup building a React web app:

React App → Hosted on AWS S3
Backend → AWS Lambda
Database → AWS DynamoDB

Everything runs on public cloud infrastructure.

Advantages

Very low upfront cost

No hardware maintenance

Easy scalability

Global availability

Fast deployment

Disadvantages

Less control over infrastructure

Security concerns for sensitive data

Internet dependency

When Companies Use Public Cloud

Web applications

Mobile applications

Startups

SaaS products

Data analytics

Dev/test environments

# Private Cloud

Cloud infrastructure dedicated to a single organization and not shared with others.
The servers and resources are not shared with other companies.
It can be hosted:

On-premise (inside the company’s data center)

In a dedicated environment provided by a cloud provider
Only the organization’s users and systems can access it.
Example

A bank storing financial data.

Reasons:

Strict security rules

Sensitive customer information

Regulatory compliance

They might run their infrastructure on:

VMware private cloud

Internal data centers

Dedicated hosted environment

Advantages

Highest security and control

Compliance with strict regulations

Custom infrastructure configuration

Better data privacy

Disadvantages

Very expensive

Requires hardware maintenance

Less scalability than public cloud

Requires IT team to manage infrastructure

When Companies Use Private Cloud

Banks

Government organizations

Healthcare systems

Large enterprises with sensitive data

# Hybrid Cloud
A combination of public and private cloud, where some resources run in the public cloud and others in a private environment.
A hybrid cloud combines:

Private cloud

Public cloud

Both environments work together and share data/applications.
Companies keep critical data in private infrastructure while using public cloud for scalable workloads.

Example

An e-commerce company:

Customer Website → Public Cloud (AWS)
Payment Data → Private Cloud (internal servers)

Flow:

User
 ↓
Public Cloud (Web App)
 ↓
Private Cloud (Secure Database)

Advantages

Better security + scalability

Flexible infrastructure

Cost optimization

Gradual cloud migration

Disadvantages

More complex architecture

Harder to manage

Requires integration between environments

When Companies Use Hybrid Cloud

Large enterprises

Companies migrating to cloud gradually

Organizations with regulatory requirements

Example industries:

Finance

Healthcare

Government

Large e-commerce platforms

# comparison
| Feature        | Public Cloud   | Private Cloud       | Hybrid Cloud |
| -------------- | -------------- | ------------------- | ------------ |
| Ownership      | Cloud provider | Single organization | Both         |
| Infrastructure | Shared         | Dedicated           | Mixed        |
| Cost           | Low            | High                | Medium       |
| Security       | Moderate       | Very high           | High         |
| Scalability    | Very high      | Limited             | High         |
| Maintenance    | Cloud provider | Organization        | Shared       |
