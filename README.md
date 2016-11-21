# ocp-nodejs-demo
This demo will show how to use OpenShift's built in HAProxy capabilities to load balance across two NodeJs Express Pods

1. Create basic node.js web app w/ git repo, 0 revisions, original commit

  **NOTE! Do not create a route automatically for this exercise**

2. Create route for initial pod

	Start testing route via curl
3. Annotate route
	  ``` 
    oc get routes
    oc annotate route/ROUT_NAME haproxy.router.openshift.io/balance=roundrobin 
    ```
  
4. Create new git code via branch

5. Create second nodejs pod from branch or most recent commit

6. Setup route to load balance between appA & appB
	Routes > Edit > Split Traffic


