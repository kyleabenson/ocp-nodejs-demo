# ocp-nodejs-demo
This demo will show how to use OpenShift's built in HAProxy capabilities to load balance across two NodeJs Express Pods

1. Create basic node.js web app w/ git repo from a previous commit
   ```
   oc new-project balanced
   oc new-app https://github.com/kyle-benson/ocp-nodejs-demo.git#b69a1b0f0c3195baa0dbd2ff600f8bebc38c7ade --name='app1'

   ```
  **NOTE! Do not create a route automatically for this exercise**

2. Create route for initial pod
  `oc expose svc/app1 --name="appab" --hostname=appab-balanced.master.kbenson.co`

3.	Start testing route via curl
  `while true; do curl appab-balanced.master.kbenson.co && echo && sleep 5; done`

4. Annotate route
	  ```
    oc get routes
    oc annotate route/appab haproxy.router.openshift.io/balance=roundrobin

    ```

5. Create second nodejs pod from new branch or updated commit

7. Setup route to load balance between appA & appB
	 Routes > Edit > Split Traffic
  ![ocp route gif]( doc_gifs/ocp_AB_routes.gif "Enabling an AB route in the UI")
