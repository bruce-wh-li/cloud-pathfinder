---
title: AWS Services
description: This is an overview of the AWS services and their current status within BC Gov.
tags:
- AWS Chatbot
- AWS IoT Core
- Amazon Transcribe Medical
- AWS WAF
- AWS Certificate Manager (ACM)
- Amazon Comprehend
- AWS Cloud Map
- AWS Snowmobile
- Amazon Connect
- AWS Single Sign-On
- AWS CodeCommit
- AWS IQ
- AWS CloudHSM
- Amazon SageMaker
- FreeRTOS
- AWS Firewall Manager
- Amazon Simple Notification Service (SNS)
- AWS X-Ray
- Amazon Transcribe
- Amazon Simple Storage Service (S3)
- AWS Outposts
- AWS License Manager
- AWS Trusted Advisor
- VM Import/Export
- Amazon DocumentDB (with MongoDB compatibility)
- AWS Cost Explorer
- Amazon ElastiCache
- AWS Lambda
- Amazon Simple Workflow Service (SWF)
- Amazon AppFlow
- AWS Fargate (ECS) [ Fargate  launch types]
- Amazon DynamoDB
- Amazon Elastic MapReduce (EMR)
- AWS PrivateLink
- Amazon Chime
- AWS Elemental MediaConvert
- Amazon Simple Email Service (SES)
- Amazon SageMaker Ground Truth
- AWS Cost and Usage Report
- Amazon Detective
- AWS CloudFormation
- End-of-Support Migration Program for Windows Server
- Elastic Load Balancing
- Amazon Elastic Kubernetes Service (EKS)
- AWS Marketplace
- Amazon Lightsail
- Amazon Cognito
- Amazon CloudWatch ( Events [includes Amazon EventBridge], Logs)
- AWS CodePipeline
- Amazon Aurora
- Amazon Elastic Compute Cloud (EC2) Auto Scaling
- AWS Config
- Amazon Relational Database Service (RDS) [includes Amazon Aurora]
- Amazon API Gateway
- AWS Database Migration Service
- AWS Fargate (ECS) [ EC2 launch types]
- Amazon Sumerian
- AWS Artifact
- Amazon Keyspaces (for Apache Cassandra)
- AWS AppSync
- AWS Resource Groups
- Amazon FSx for Lustre
- AWS Direct Connect
- Amazon SageMaker Neo
- Amazon Managed Streaming for Apache Kafka
- Amazon Macie
- Amazon WorkSpaces
- AWS DataSync
- Amazon Personalize
- VMware Cloud on AWS
- AWS Compute Optimizer
- AWS Transit Gateway
- Amazon Elastic File System (EFS)
- Amazon MQ
- AWS IoT Device Management
- AWS Step Functions
- Amazon Simple Queue Service (SQS)
- AWS Global Accelerator
- AWS Transfer Family
- AWS Systems Manager
- AWS Lake Formation
- Amazon Neptune
- AWS Well-Architected Tool
- AWS CodeStar
- AWS IoT Device Defender
- AWS Security Hub
- Amazon Elastic Container Service (ECS)
- CloudEndure Migration
- Amazon Kinesis Data Streams
- Amazon Kinesis Data Firehose
- Amazon Polly
- AWS Snowball
- Amazon EventBridge
- AWS Key Management Service (KMS)
- Amazon Elasticsearch Service
- AWS CloudTrail
- Amazon Transcribe (real-time streaming)
- AWS Cloud9
- Amazon FSx for Windows File Server
- AWS Glue [includes AWS Lake Formation]
- AWS Secrets Manager
- AWS Support
- Amazon Kinesis Video Streams
- AWS CodeDeploy
- Amazon GameLift
- Amazon Virtual Private Cloud (VPC)
- Amazon GuardDuty
- AWS CodeBuild
- AWS Personal Health Dashboard
- AWS Resource Access Manager (RAM)
- Amazon Redshift
- Amazon Translate
- AWS App Mesh
- AWS Service Catalog
- AWS Budgets
- AWS Storage Gateway
- Amazon Elastic Container Registry (ECR)
- Amazon Cloud Directory
- AWS Auto Scaling aka Amazon EC2 Auto Scaling
- AWS Serverless Application Repository
- CloudEndure Disaster Recovery
- Amazon Augmented AI (A2I) aka sagemaker
- AWS Server Migration Service (SMS)
- AWS Batch
- Amazon Elastic Block Store (EBS)
- AWS Shield Advanced
- Amazon Comprehend Medical
- Amazon Athena
- AWS Backup
- AWS Amplify
- AWS Elastic Beanstalk
- Amazon Kinesis Data Analytics
- AWS Shield Standard
- AWS Managed Services
- AWS Directory Service [excludes Simple AD]
- Amazon CloudFront  [includes S3 Transfer Acceleration] aka CDN
---
<!---
Note: this is a generated file.  You should not edit it directly.  Please check https://github.com/bcgov/cloud-pathfinder for details.
-->

# AWS Services

The BC Gov Public Cloud Accelerator Service Team (aka Cloud Pathfinder)'s purpose is to accelerate Ministry Team's access  and ability to make effective use of Public Cloud.  Public Cloud in this case means infrastructure owned and operated by 3rd party Cloud Service Providers in their own data centres, assigned and secured to BC Governement.

The list of tools below is an overview of the AWS services that Cloud Pathfinder has already reviewed in advance for teams to use when they build their apps. Services listed as "Basic Checks Completed" have completed a generic set of privacy and security reviews and are endorsed for basic use, making up a developer toolbox of pre-vetted services.  A large part of the review effort is checking compatibility with the SEA environment itself as that has guardrails that could prevent a service from working. Each application being built and hosted in the cloud requires a Privacy Impact Assessment (PIA) and Security Threat Risk Assessment (STRA).

Each application engagement is required to kick-off with the Ministry Privacy Officer (MPO) and Ministry Information Security Officer (MISO) present to that they have time to work on the PIA and STRA while the team gets started on their app. Most teams usually begin work with a few weeks of DevOps pipeline automation setup, so this gives time for the compliance work to happen in parallel. Teams are prohibited from leaving compliance to the last minute prior to big launch dates.  Teams are encouraged to work collaboratively releasing frequently to production to avoid last minute delivery issues when tech debt in unused pipelines shows up.

If services other than the "Basic Checks Completed" (pre-vetted) ones listed below are desired, one can either approach the Cloud Pathfinder team to ask them to add a new tool to the services list, or one can have the MPO and MISO on the ministry team include the service in the application STRA and PIA. Going through Cloud Pathfinder is recommended as there are rare instances where enabling certain services is challenging due to Secure Environment Accelerator (SEA)-wide guardrails that cannot be changed without affecting the compliance of the whole SEA. The purpose of the below list of tools is to save teams time by providing reusable information that can help accelerate their PIA and STRA processes.

<iframe
  src="https://airtable.com/embed/shrfZS294sP5GcbKr?backgroundColor=yellow&viewControls=on"
  frameborder="0"
  onmousewheel=""
  width="100%"
  height="900px"
>
</iframe>
