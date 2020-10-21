(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{106:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),d=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,m=p["".concat(c,".").concat(u)]||p[u]||b[u]||o;return a?n.a.createElement(m,i(i({ref:t},l),{},{components:a})):n.a.createElement(m,i({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=a[l];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var r=a(2),n=a(6),o=(a(0),a(106)),c={title:"Data"},i={unversionedId:"data",id:"data",isDocsHomePage:!1,title:"Data",description:"Concepts",source:"@site/docs/data.md",slug:"/data",permalink:"/azureml-examples/docs/data",editUrl:"https://github.com/Azure/azureml-examples/tree/main/website/docs/data.md",version:"current",sidebar:"mainSidebar",previous:{title:"Environment",permalink:"/azureml-examples/docs/environment"},next:{title:"Experiment and Run",permalink:"/azureml-examples/docs/run"}},s=[{value:"Concepts",id:"concepts",children:[{value:"Datastore",id:"datastore",children:[]},{value:"Dataset",id:"dataset",children:[]}]},{value:"Get Datastore",id:"get-datastore",children:[{value:"Default datastore",id:"default-datastore",children:[]},{value:"Registered datastores",id:"registered-datastores",children:[]}]},{value:"Upload to Datastore",id:"upload-to-datastore",children:[{value:"Via SDK",id:"via-sdk",children:[]},{value:"Via Storage Explorer",id:"via-storage-explorer",children:[]}]},{value:"Read from Datastore",id:"read-from-datastore",children:[{value:"DataReference",id:"datareference",children:[]}]},{value:"Create Dataset",id:"create-dataset",children:[{value:"From local data",id:"from-local-data",children:[]}]},{value:"Use Dataset",id:"use-dataset",children:[{value:"ScriptRunConfig",id:"scriptrunconfig",children:[]}]}],l={rightToc:s};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"concepts"},"Concepts"),Object(o.b)("p",null,"AzureML provides two basic assets for working with data:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Datastore"),Object(o.b)("li",{parentName:"ul"},"Dataset")),Object(o.b)("h3",{id:"datastore"},"Datastore"),Object(o.b)("p",null,"Provides an interface for numerous Azure Machine Learning storage accounts."),Object(o.b)("p",null,"Each Azure ML workspace comes with a default datastore:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Workspace\nws = Workspace.from_config()\ndatastore = ws.get_default_datastore()\n")),Object(o.b)("p",null,"which can also be accessed directly from the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://portal.azure.com"}),"Azure Portal")," (under the same\nresource group as your Azure ML Workspace)."),Object(o.b)("p",null,"Datastores are attached to workspaces and are used to store connection information to Azure storage services so you can refer to them by name and don't need to remember the connection information and secret used to connect to the storage services."),Object(o.b)("p",null,"Use this class to perform management operations, including register, list, get, and remove datastores."),Object(o.b)("h3",{id:"dataset"},"Dataset"),Object(o.b)("p",null,"A dataset is a reference to data - either in a datastore or behind a public URL."),Object(o.b)("p",null,"Datasets provide enhaced capabilities including data lineage (with the notion of versioned datasets)."),Object(o.b)("h2",{id:"get-datastore"},"Get Datastore"),Object(o.b)("h3",{id:"default-datastore"},"Default datastore"),Object(o.b)("p",null,"Each workspace comes with a default datastore."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"datastore = ws.get_default_datastore()\n")),Object(o.b)("h3",{id:"registered-datastores"},"Registered datastores"),Object(o.b)("p",null,"Connect to, or create, a datastore backed by one of the multiple data-storage options\nthat Azure provides."),Object(o.b)("h4",{id:"register-a-new-datastore"},"Register a new datastore"),Object(o.b)("p",null,"To register a store via a SAS token:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'datastores = Datastore.register_azure_blob_container(\n    workspace=ws,\n    datastore_name="<datastore-name>",\n    container_name="<container-name>",\n    account_name="<account-name>",\n    sas_token="<sas-token>",\n)\n')),Object(o.b)("p",null,"For more ways authentication options and for different underlying storage see\nthe AML documentation on\n",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.microsoft.com/en-us/python/api/azureml-core/azureml.core.datastore(class)?view=azure-ml-py"}),"Datastores"),"."),Object(o.b)("h4",{id:"connect-to-registered-datastore"},"Connect to registered datastore"),Object(o.b)("p",null,"Any datastore that is registered to workspace can be accessed by name."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'from azureml.core import Datastore\ndatastore = Datastore.get(ws, "<name-of-registered-datastore>")\n')),Object(o.b)("h2",{id:"upload-to-datastore"},"Upload to Datastore"),Object(o.b)("h3",{id:"via-sdk"},"Via SDK"),Object(o.b)("p",null,"The datastore provides APIs for data upload:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"datastore.upload(src_dir='./data', target_path='<path/on/datastore>', overwrite=True)\n")),Object(o.b)("h3",{id:"via-storage-explorer"},"Via Storage Explorer"),Object(o.b)("p",null,"Azure Storage Explorer is free tool to easily manage your Azure cloud storage\nresources from Windows, macOS, or Linux. Download it from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://azure.microsoft.com/features/storage-explorer/"}),"here"),"."),Object(o.b)("p",null,"Azure Storage Explorer gives you a (graphical) file exporer, so you can literally drag and drop\nfiles into your Datastores."),Object(o.b)("h4",{id:"working-with-the-default-datastore"},"Working with the default datastore"),Object(o.b)("p",null,"Each workspace comes with its own datastore (e.g. ",Object(o.b)("inlineCode",{parentName:"p"},"ws.get_default_datastore"),"). Visit ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://portal.azure.com"}),"https://portal.azure.com"),"\nand locate your workspace's resource group and find the storage account."),Object(o.b)("h2",{id:"read-from-datastore"},"Read from Datastore"),Object(o.b)("p",null,"Reference data in a ",Object(o.b)("inlineCode",{parentName:"p"},"Datastore")," in your code, for example to use in a remote setting."),Object(o.b)("h3",{id:"datareference"},"DataReference"),Object(o.b)("p",null,"First, connect to your basic assets: ",Object(o.b)("inlineCode",{parentName:"p"},"Workspace"),", ",Object(o.b)("inlineCode",{parentName:"p"},"ComputeTarget")," and ",Object(o.b)("inlineCode",{parentName:"p"},"Datastore"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"from azureml.core import Workspace\nws: Workspace = Workspace.from_config()\ncompute_target: ComputeTarget = ws.compute_targets['<compute-target-name>']\nds: Datastore = ws.get_default_datastore()\n")),Object(o.b)("p",null,"Create a ",Object(o.b)("inlineCode",{parentName:"p"},"DataReference"),", either as mount:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"data_ref = ds.path('<path/on/datastore>').as_mount()\n")),Object(o.b)("p",null,"or as download:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"data_ref = ds.path('<path/on/datastore>').as_download()\n")),Object(o.b)("h4",{id:"consume-datareference-in-scriptrunconfig"},"Consume DataReference in ScriptRunConfig"),Object(o.b)("p",null,"Add this DataReference to a ScriptRunConfig as follows."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"config = ScriptRunConfig(\n    source_directory='.',\n    script='script.py',\n    arguments=[str(data_ref)],               # returns environment variable $AZUREML_DATAREFERENCE_example_data\n    compute_target=compute_target,\n)\n\nconfig.run_config.data_references[data_ref.data_reference_name] = data_ref.to_config()\n")),Object(o.b)("p",null,"The command-line argument ",Object(o.b)("inlineCode",{parentName:"p"},"str(data_ref)")," returns the environment variable ",Object(o.b)("inlineCode",{parentName:"p"},"$AZUREML_DATAREFERENCE_example_data"),".\nFinally, ",Object(o.b)("inlineCode",{parentName:"p"},"data_ref.to_config()")," instructs the run to mount the data to the compute target and to assign the\nabove environment variable appropriately."),Object(o.b)("h4",{id:"without-specifying-argument"},"Without specifying argument"),Object(o.b)("p",null,"Specify a ",Object(o.b)("inlineCode",{parentName:"p"},"path_on_compute")," to reference your data without the need for command-line arguments."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"data_ref = ds.path('<path/on/datastore>').as_mount()\ndata_ref.path_on_compute = '/tmp/data'\n\nconfig = ScriptRunConfig(\n    source_directory='.',\n    script='script.py',\n    compute_target=compute_target,\n)\n\nconfig.run_config.data_references[data_ref.data_reference_name] = data_ref.to_config()\n")),Object(o.b)("h2",{id:"create-dataset"},"Create Dataset"),Object(o.b)("h3",{id:"from-local-data"},"From local data"),Object(o.b)("h4",{id:"upload-to-datastore-1"},"Upload to datastore"),Object(o.b)("p",null,"To upload a local directory ",Object(o.b)("inlineCode",{parentName:"p"},"./data/"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"datastore = ws.get_default_datastore()\ndatastore.upload(src_dir='./data', target_path='<path/on/datastore>', overwrite=True)\n")),Object(o.b)("p",null,"This will upload the entire directory ",Object(o.b)("inlineCode",{parentName:"p"},"./data")," from local to the default datastore associated\nto your workspace ",Object(o.b)("inlineCode",{parentName:"p"},"ws"),"."),Object(o.b)("h4",{id:"create-dataset-from-files-in-datastore"},"Create dataset from files in datastore"),Object(o.b)("p",null,"To create a dataset from a directory on a datastore at ",Object(o.b)("inlineCode",{parentName:"p"},"<path/on/datastore>"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),"datastore = ws.get_default_datastore()\ndataset = Dataset.File.from_files(path=(datastore, '<path/on/datastore>'))\n")),Object(o.b)("h2",{id:"use-dataset"},"Use Dataset"),Object(o.b)("h3",{id:"scriptrunconfig"},"ScriptRunConfig"),Object(o.b)("p",null,"To reference data from a dataset in a ScriptRunConfig you can either mount or download the\ndataset using:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dataset.as_mount(path_on_compute)")," : mount dataset to a remote run"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"dataset.as_download(path_on_compute)")," : download the dataset to a remote run")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Path on compute")," Both ",Object(o.b)("inlineCode",{parentName:"p"},"as_mount")," and ",Object(o.b)("inlineCode",{parentName:"p"},"as_download")," accept an (optional) parameter ",Object(o.b)("inlineCode",{parentName:"p"},"path_on_compute"),".\nThis defines the path on the compute target where the data is made available."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"If ",Object(o.b)("inlineCode",{parentName:"li"},"None"),", the data will be downloaded into a temporary directory."),Object(o.b)("li",{parentName:"ul"},"If ",Object(o.b)("inlineCode",{parentName:"li"},"path_on_compute")," starts with a ",Object(o.b)("inlineCode",{parentName:"li"},"/")," it will be treated as an ",Object(o.b)("strong",{parentName:"li"},"absolute path"),". (If you have\nspecified an absolute path, please make sure that the job has permission to write to that directory.)"),Object(o.b)("li",{parentName:"ul"},"Otherwise it will be treated as relative to the working directory")),Object(o.b)("p",null,"Reference this data in a remote run, for example in mount-mode:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="run.py"',title:'"run.py"'}),"arguments=[dataset.as_mount()]\nconfig = ScriptRunConfig(source_directory='.', script='train.py', arguments=arguments)\nexperiment.submit(config)\n")),Object(o.b)("p",null,"and consumed in ",Object(o.b)("inlineCode",{parentName:"p"},"train.py"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python",metastring:'title="train.py"',title:'"train.py"'}),'import sys\ndata_dir = sys.argv[1]\n\nprint("===== DATA =====")\nprint("DATA PATH: " + data_dir)\nprint("LIST FILES IN DATA DIR...")\nprint(os.listdir(data_dir))\nprint("================")\n')),Object(o.b)("p",null,"For more details: ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"script-run-config"}),"ScriptRunConfig")))}d.isMDXComponent=!0}}]);