<?php
$music = [
	'code'=>0,
	'songData'=>[
		[
		'songname'=>'等你下课',
		'singer'=>['周杰伦'],
		'time'=>'4分50'
		],
		[
		'songname'=>'爱你一万年',
		'singer'=>['刘德华'],
		'time'=>'3分30'
		]
	]
];

// for($i=0;$i<=50000000;$i++){

// }

// echo json_encode($music);

echo $_GET['_jp'].'('.json_encode($music).')';


?>