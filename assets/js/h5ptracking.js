document.addEventListener("DOMContentLoaded", async () => {
   const  el=document.querySelector(".h5p-container");
     if (!el)
        return;
        const contentId = el.getAttribute("data-id");
        const jsonPath = el.getAttribute("data-path");
        const contentJsonPath = el.getAttribute("data-path2");
      
        console.log(`📂 Initializing H5P for: ${contentId}`);

        if (contentId && jsonPath && contentJsonPath) {


            // Prevent duplicate initialization
            if (el.dataset.h5pInitialized) {
               console.warn(`⚠️ H5P instance for ${ccontentJsonPath} is already initialized. Skipping duplicate.`);
                return;
            }

            el.dataset.h5pInitialized = "true"; // Mark as initialized
          
            let result=localStorage.getItem(`h5p_state_${contentJsonPath}`);
        

            const options = {
                h5pJsonPath: jsonPath,
                contentJsonPath: contentJsonPath,
                frameJs: "https://cdn.jsdelivr.net/npm/h5p-standalone@3.8.0/dist/frame.bundle.js",
                frameCss: "https://cdn.jsdelivr.net/npm/h5p-standalone@3.8.0/dist/styles/h5p.css",
                contentUserData: (result)?[{ state: result }]:undefined, 
                storage:"local",
                saveFreq: 10 // Auto-save every 10 seconds
            };
       
            options.contentUserData= (result)?[{ state: result }]:undefined;
          
            // ✅ Using Promises to wait for H5P to initialize
            const h5pInstance= new H5PStandalone.H5P(el, options).then(() => {
                
                H5P.externalDispatcher.on("xAPI", (event) => {


                    if (!event.data.statement.verb || !event.data.statement.verb.display) {
                        return;
                    }
                    const verb=event.data.statement.verb.display["en-US"] ;
                    if (verb === "answered" || verb === "completed") {
                        try {
                          	const d=	"{\"progress\":0,\"answers\":[{\"answers\":[]},{\"answers\":[]},{\"answers\":[]},{\"answers\":[]},{\"answers\":[]},{\"answers\":[]},{\"answers\":[]},{\"answers\":[]},{\"answers\":[]},{\"answers\":[]},{\"answers\":[]},{\"answers\":[]}]}";
                            let object=localStorage.getItem(`h5p_state_${contentJsonPath}`);
                            if (object)
                                object_j=JSON.parse(object);
                            else
                                object_j=JSON.parse(d);
                                console.log(object_j.progress)
                                console.log( object_j.answers[object_j.progress])
                                object_j.answers[object_j.progress]={answers: [parseInt(event.data.statement.result.response)]},
                                object_j.progress +=1;
                                localStorage.setItem(`h5p_state_${contentJsonPath}`,JSON.stringify(object_j)); 
                           
                           }   catch (error) {
                            console.error("❌ Error saving structured H5P state:", error);
                        }
                    }
                });

            }).catch((error) => {
                console.error("❌ H5P failed to load:", error);
            });

        } else {
            console.error("❌ Missing H5P data attributes");
        }

});
