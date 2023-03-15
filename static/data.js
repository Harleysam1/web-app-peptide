data_venn = [
  {
    label: 'AMB',
    values: ['A',"F","G","I"]
},
{
    label: 'AMF',
    values: ['B',"F","H","I"]
},
{
    label: 'AMV',
    values: ['C',"G","H","I"]
}
]

data_AMP = ['D']
data_NO = ['E']

var jsonObj_AMP = [
 { "Name": "D","AMP": "1", "Source": "Source" }
];

var jsonObj_NO = [
  { "Name": "E", "Source": "Source" }
 ];

 var jsonObj_AMB = [
  { "Name": "A","AMP": "1", "AMB": "1" ,"Source": "Source" }
 ];

 var jsonObj_AMF = [
  { "Name": "B","AMP": "1","AMF": "1" , "Source": "Source" }
 ];

 var jsonObj_AMV = [
  { "Name": "C","AMP": "1","AMV": "1" , "Source": "Source" }
 ];

 var jsonObj_AMB_AMF = [
  { "Name": "F","AMP": "1","AMB": "1","AMF": "1", "Source": "Source" }
 ];

 var jsonObj_AMF_AMV = [
  { "Name": "G","AMP": "1","AMF": "1","AMV": "1", "Source": "Source" }
 ];

 var jsonObj_AMV_AMB = [
  { "Name": "H","AMP": "1","AMB": "1","AMV": "1","Source": "Source" }
 ];

 var jsonObj_AMB_AMF_AMV = [
  { "Name": "I","AMP": "1","AMB": "1","AMF": "1","AMV": "1", "Source": "Source" }
 ];
