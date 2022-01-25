# Extra Slides

### BC Gov AWS Cloud Layers

![BC Gov AWS Cloud Layers](./images/bc_gov_cloud_layers.png)

---

### Terraform Cloud
![Terraform Cloud](./images/tf_cloud.png)


### Demo App: CI/CD Workflow
- All-In-One
    - Terraform workspace for each team account environment (Dev, Test, Prod)
- Microservice
    - Terraform workspace for each service in a team account environment (Dev-App1, Dev-App2, Test-App1, Test-App2, etc)
- Combination
    - Workspace for common infrastructure
    - Workspaces for each service

![Demo App CI/CD Workflow](./images/demo_app_ci_cd_workflow.png)