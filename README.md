A simple frontend app using React and Typescript, with Prisma and Zenstack. 

To start app, run 

`yarn start`

To see optimistic update issue, I have set up a database with an entry. On the index page, there is a input text box, when you click submit the text displayed above the text box will change to reflect what your input is. If you set the throttling to 3G the API call, I would expect the text to update before the API call was complete. However, this is not the case.