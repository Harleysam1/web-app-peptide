data_venn = [
  {
    label: 'ABP',
    values: ['A',"F","G","I"]
},
{
    label: 'AFP',
    values: ['B',"F","H","I"]
},
{
    label: 'AVP',
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

 var jsonObj_ABP = [
  { "Name": "A","AMP": "1", "ABP": "1" ,"Source": "Source" }
 ];

 var jsonObj_AFP = [
  { "Name": "B","AMP": "1","AFP": "1" , "Source": "Source" }
 ];

 var jsonObj_AVP = [
  { "Name": "C","AMP": "1","AVP": "1" , "Source": "Source" }
 ];

 var jsonObj_ABP_AFP = [
  { "Name": "F","AMP": "1","ABP": "1","AFP": "1", "Source": "Source" }
 ];

 var jsonObj_AFP_AVP = [
  { "Name": "G","AMP": "1","AFP": "1","AVP": "1", "Source": "Source" }
 ];

 var jsonObj_AVP_ABP = [
  { "Name": "H","AMP": "1","ABP": "1","AVP": "1","Source": "Source" }
 ];

 var jsonObj_ABP_AFP_AVP = [
  { "Name": "I","AMP": "1","ABP": "1","AFP": "1","AVP": "1", "Source": "Source" }
 ];
