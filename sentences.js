const sentenceData = {
  day1: [
    // 1번
    {
      id: 'sentence1',
      level: 1,
      isFinal: false,
      korean: '중국어를 말해요.',
      chinese: {
        hanzi: ['说', '汉语'],
        pinyin: ['shuō', 'hànyǔ'],
      },
    },
    {
      id: 'sentence1',
      level: 2,
      isFinal: false,
      korean: '중국어를 말할 줄 알아요?',
      chinese: {
        hanzi: ['会', '说', '汉语'],
        pinyin: ['huì', 'shuō', 'hànyǔ'],
      },
    },
    {
      id: 'sentence1',
      level: 3,
      isFinal: true,
      korean: 'A: 누가 중국어를 말할 줄 아나요?',
      chinese: {
        hanzi: ['谁', '会', '说', '汉语'],
        pinyin: ['shéi', 'huì', 'shuō', 'hànyǔ'],
      },
    },
    {
      id: 'sentence1',
      level: 4,
      isFinal: true,
      korean: 'B: 저는 중국어를 말할 줄 알아요.',
      chinese: {
        hanzi: ['我', '会', '说', '汉语'],
        pinyin: ['wǒ', 'huì', 'shuō', 'hànyǔ'],
      },
    },

    // 2번
    {
      id: 'sentence2',
      level: 1,
      isFinal: false,
      korean: '등산(하러) 가요.',
      chinese: {
        hanzi: ['去', '爬', '山'],
        pinyin: ['qù', 'pá', 'shān'],
      },
    },
    {
      id: 'sentence2',
      level: 2,
      isFinal: false,
      korean: '내일 등산(하러) 가요.',
      chinese: {
        hanzi: ['明天', '去', '爬', '山'],
        pinyin: ['míngtiān', 'qù', 'pá', 'shān'],
      },
    },
    {
      id: 'sentence2',
      level: 3,
      isFinal: false,
      korean: '저는 …할 계획이에요(…하려고 해요)',
      chinese: {
        hanzi: ['我', '打算……'],
        pinyin: ['wǒ', 'dǎsuàn……'],
      },
    },
    {
      id: 'sentence2',
      level: 4,
      isFinal: true,
      korean: 'A: 저는 내일 등산 갈 계획이에요.',
      chinese: {
        hanzi: ['我', '打算', '明天', '去', '爬', '山'],
        pinyin: ['wǒ', 'dǎsuàn', 'míngtiān', 'qù', 'pá', 'shān'],
      },
    },
    {
      id: 'sentence2',
      level: 5,
      isFinal: false,
      korean: '비가 와요.',
      chinese: {
        hanzi: ['下雨'],
        pinyin: ['xià yǔ'],
      },
    },
    {
      id: 'sentence2',
      level: 6,
      isFinal: false,
      korean: '내일 비가 와요.',
      chinese: {
        hanzi: ['明天', '下雨'],
        pinyin: ['míngtiān', 'xià yǔ'],
      },
    },
    {
      id: 'sentence2',
      level: 7,
      isFinal: true,
      korean: 'B: 내일 비가 올 거예요.',
      chinese: {
        hanzi: ['明天', '会', '下', '雨'],
        pinyin: ['míngtiān', 'huì', 'xià', 'yǔ'],
      },
    },

    // 3번
    {
      id: 'sentence3',
      level: 1,
      isFinal: false,
      korean: '새 차를 사요.',
      chinese: {
        hanzi: ['买', '新车'],
        pinyin: ['mǎi', 'xīn chē'],
      },
    },
    {
      id: 'sentence3',
      level: 2,
      isFinal: false,
      korean: '새 차를 샀어요.',
      chinese: {
        hanzi: ['买了', '新车'],
        pinyin: ['mǎi le', 'xīn chē'],
      },
    },
    {
      id: 'sentence3',
      level: 3,
      isFinal: false,
      korean: '그녀는 새 차를 샀어요.',
      chinese: {
        hanzi: ['她', '买了', '新车'],
        pinyin: ['tā', 'mǎi le', 'xīn chē'],
      },
    },
    {
      id: 'sentence3',
      level: 4,
      isFinal: true,
      korean: 'A: 그녀는 새 차를 샀나요?',
      chinese: {
        hanzi: ['她', '买了', '新车', '吗？'],
        pinyin: ['tā', 'mǎi le', 'xīn chē', 'ma'],
      },
    },
    {
      id: 'sentence3',
      level: 5,
      isFinal: false,
      korean: '운전을 할 줄 알아요.',
      chinese: {
        hanzi: ['会', '开'],
        pinyin: ['huì', 'kāi'],
      },
    },
    {
      id: 'sentence3',
      level: 6,
      isFinal: false,
      korean: '운전을 할 줄 몰라요.',
      chinese: {
        hanzi: ['不会', '开'],
        pinyin: ['bú huì', 'kāi'],
      },
    },
    {
      id: 'sentence3',
      level: 7,
      isFinal: false,
      korean: '차조차도 …… ',
      chinese: {
        hanzi: ['连车都……'],
        pinyin: ['lián chē dōu……'],
      },
    },
    {
      id: 'sentence3',
      level: 8,
      isFinal: false,
      korean: '차조차도 운전할 줄 몰라요.',
      chinese: {
        hanzi: ['连车都', '不会', '开'],
        pinyin: ['lián chē dōu', 'bú huì', 'kāi'],
      },
    },
    {
      id: 'sentence3',
      level: 9,
      isFinal: false,
      korean: '그녀는 차조차도 운전할 줄 몰라요.',
      chinese: {
        hanzi: ['她', '连车都', '不会', '开'],
        pinyin: ['tā', 'lián chē dōu', 'bú huì', 'kāi'],
      },
    },
    {
      id: 'sentence3',
      level: 10,
      isFinal: true,
      korean: 'B: 아니요, 그녀는 차조차도 운전할 줄 몰라요.',
      chinese: {
        hanzi: ['没有啊', '她', '连车都', '不会', '开'],
        pinyin: ['méiyǒu a', 'tā', 'lián chē dōu', 'bú huì', 'kāi'],
      },
    },

    // 4번
    {
      id: 'sentence4',
      level: 1,
      isFinal: false,
      korean: '저의 생일.',
      chinese: {
        hanzi: ['我的', '生日'],
        pinyin: ['wǒ de', 'shēngrì'],
      },
    },
    {
      id: 'sentence4',
      level: 2,
      isFinal: false,
      korean: '저의 생일을 잊어버렸어요.',
      chinese: {
        hanzi: ['忘了', '我的', '生日'],
        pinyin: ['wàng le', 'wǒ de', 'shēngrì'],
      },
    },
    {
      id: 'sentence4',
      level: 3,
      isFinal: false,
      korean: '그는 저의 생일을 잊어버렸어요.',
      chinese: {
        hanzi: ['他', '忘了', '我的', '生日'],
        pinyin: ['tā', 'wàng le', 'wǒ de', 'shēngrì'],
      },
    },
    {
      id: 'sentence4',
      level: 4,
      isFinal: true,
      korean: 'A: 그는 저의 생일을 잊어버린 거죠?',
      chinese: {
        hanzi: ['他', '忘了', '我的', '生日', '吗？'],
        pinyin: ['tā', 'wàng le', 'wǒ de', 'shēngrì', 'ma?'],
      },
    },
    {
      id: 'sentence4',
      level: 5,
      isFinal: false,
      korean: '잊다.',
      chinese: {
        hanzi: ['忘记'],
        pinyin: ['wàngjì'],
      },
    },
    {
      id: 'sentence4',
      level: 6,
      isFinal: false,
      korean: '잊을 거예요.',
      chinese: {
        hanzi: ['会', '忘记', '的'],
        pinyin: ['huì', 'wàngjì', 'de'],
      },
    },
    {
      id: 'sentence4',
      level: 7,
      isFinal: false,
      korean: '잊지 않을 거에요.',
      chinese: {
        hanzi: ['不会', '忘记', '的'],
        pinyin: ['bú huì', 'wàngjì', 'de'],
      },
    },
    {
      id: 'sentence4',
      level: 8,
      isFinal: true,
      korean: 'B: 그는 잊지 않을 거에요.',
      chinese: {
        hanzi: ['他', '不会', '忘记', '的'],
        pinyin: ['tā', 'bú huì', 'wàngjì', 'de'],
      },
    },

    // 5번
    {
      id: 'sentence5',
      level: 1,
      isFinal: false,
      korean: '웃었어요.',
      chinese: {
        hanzi: ['笑了'],
        pinyin: ['xiào le'],
      },
    },
    {
      id: 'sentence5',
      level: 2,
      isFinal: false,
      korean: '방금 웃었어요.',
      chinese: {
        hanzi: ['刚才', '笑了'],
        pinyin: ['gāngcái', 'xiào le'],
      },
    },
    {
      id: 'sentence5',
      level: 3,
      isFinal: true,
      korean: 'A: 그녀가 방금 웃었어요.',
      chinese: {
        hanzi: ['她', '刚才', '笑了'],
        pinyin: ['tā', 'gāngcái', 'xiào le'],
      },
    },
    {
      id: 'sentence5',
      level: 4,
      isFinal: false,
      korean: '한국어를 알아들어요.',
      chinese: {
        hanzi: ['听懂', '韩语'],
        pinyin: ['tīngdǒng', 'hányǔ'],
      },
    },
    {
      id: 'sentence5',
      level: 5,
      isFinal: false,
      korean: '한국어를 알아들을 수 있어요.',
      chinese: {
        hanzi: ['能', '听懂', '韩语'],
        pinyin: ['néng', 'tīngdǒng', 'hányǔ'],
      },
    },
    {
      id: 'sentence5',
      level: 6,
      isFinal: true,
      korean: 'B: 그녀는 한국어를 알아들을 수 있어요.',
      chinese: {
        hanzi: ['她', '能', '听懂', '韩语'],
        pinyin: ['tā', 'néng', 'tīngdǒng', 'hányǔ'],
      },
    },
    // 6번
    {
      id: 'sentence6',
      level: 1,
      isFinal: false,
      korean: '신분증을 두고 오다(가져오는 것을 까먹다).',
      chinese: {
        hanzi: ['忘带', '身份证'],
        pinyin: ['wàngdài', 'shēnfènzhèng'],
      },
    },
    {
      id: 'sentence6',
      level: 2,
      isFinal: false,
      korean: '신분증을 두고 왔어요.',
      chinese: {
        hanzi: ['忘带', '身份证', '了'],
        pinyin: ['wàngdài', 'shēnfènzhèng', 'le'],
      },
    },
    {
      id: 'sentence6',
      level: 3,
      isFinal: true,
      korean: 'A: 저는 신분증을 두고 왔어요.',
      chinese: {
        hanzi: ['我', '忘带', '身份证', '了'],
        pinyin: ['wǒ', 'wàngdài', 'shēnfènzhèng', 'le'],
      },
    },
    {
      id: 'sentence6',
      level: 4,
      isFinal: false,
      korean: '들어갈 수 있어요.',
      chinese: {
        hanzi: ['能进'],
        pinyin: ['néng', 'jìn'],
      },
    },
    {
      id: 'sentence6',
      level: 5,
      isFinal: false,
      korean: '그래야 들어갈 수 있어요.',
      chinese: {
        hanzi: ['才', '能', '进'],
        pinyin: ['cái', 'néng', 'jìn'],
      },
    },
    {
      id: 'sentence6',
      level: 6,
      isFinal: false,
      korean: '신분증이 있어요.',
      chinese: {
        hanzi: ['有', '身份证'],
        pinyin: ['yǒu', 'shēnfènzhèng'],
      },
    },
    {
      id: 'sentence6',
      level: 7,
      isFinal: false,
      korean: '신분증이 있어야 들어갈 수 있어요.',
      chinese: {
        hanzi: ['有', '身份证', '才', '能', '进'],
        pinyin: ['yǒu', 'shēnfènzhèng', 'cái', 'néng', 'jìn'],
      },
    },
    {
      id: 'sentence6',
      level: 8,
      isFinal: false,
      korean: '어떡하죠? 신분증이 있어야 들어갈 수 있어요.',
      chinese: {
        hanzi: ['怎么办', '有', '身份证', '才', '能', '进'],
        pinyin: ['zhěnmebàn', 'yǒu', 'shēnfènzhèng', 'cái', 'néng', 'jìn'],
      },
    },
    {
      id: 'sentence6',
      level: 9,
      isFinal: true,
      korean: '그럼 어떡하죠? 신분증이 있어야 들어갈 수 있어요.',
      chinese: {
        hanzi: ['那', '怎么办', '有', '身份证', '才', '能', '进'],
        pinyin: [
          'nà',
          'zhěnmebàn',
          'yǒu',
          'shēnfènzhèng',
          'cái',
          'néng',
          'jìn',
        ],
      },
    },
    // 7번
    {
      id: 'sentence7',
      level: 1,
      isFinal: false,
      korean: '안 왔어요.',
      chinese: {
        hanzi: ['没来'],
        pinyin: ['méi lái'],
      },
    },
    {
      id: 'sentence7',
      level: 2,
      isFinal: false,
      korean: '왜 안 왔어요?',
      chinese: {
        hanzi: ['怎么', '没来'],
        pinyin: ['zěnme', 'méi lái'],
      },
    },
    {
      id: 'sentence7',
      level: 3,
      isFinal: false,
      korean: '그는 왜 안 왔어요?',
      chinese: {
        hanzi: ['他', '怎么', '没来'],
        pinyin: ['tā', 'zěnme', 'méi lái'],
      },
    },
    {
      id: 'sentence7',
      level: 4,
      isFinal: true,
      korean: 'A: 오늘 그는 왜 안 왔어요?',
      chinese: {
        hanzi: ['今天', '他', '怎么', '没来'],
        pinyin: ['jīntiān', 'tā', 'zěnme', 'méi lái'],
      },
    },
    {
      id: 'sentence7',
      level: 5,
      isFinal: false,
      korean: '올 수 있어요.',
      chinese: {
        hanzi: ['能', '来'],
        pinyin: ['néng', 'lái'],
      },
    },
    {
      id: 'sentence7',
      level: 6,
      isFinal: false,
      korean: '올 수 없어요.',
      chinese: {
        hanzi: ['不能', '来'],
        pinyin: ['bù néng', 'lái'],
      },
    },
    {
      id: 'sentence7',
      level: 7,
      isFinal: false,
      korean: '다쳤어요.',
      chinese: {
        hanzi: ['受伤了'],
        pinyin: ['shòushāng le'],
      },
    },
    {
      id: 'sentence7',
      level: 8,
      isFinal: false,
      korean: '발을 다쳤어요.',
      chinese: {
        hanzi: ['脚', '受伤', '了'],
        pinyin: ['jiǎo', 'shòushāng', 'le'],
      },
    },
    {
      id: 'sentence7',
      level: 9,
      isFinal: false,
      korean: '그는 발을 다쳤어요.',
      chinese: {
        hanzi: ['他', '脚', '受伤', '了'],
        pinyin: ['tā', 'jiǎo', 'shòushāng', 'le'],
      },
    },
    {
      id: 'sentence7',
      level: 10,
      isFinal: true,
      korean: '그는 발을 다쳐서 올 수 없어요.',
      chinese: {
        hanzi: ['他', '脚', '受伤', '了', '不能', '来'],
        pinyin: ['tā', 'jiǎo', 'shòushāng', 'le', 'bù néng', 'lái'],
      },
    },

    // 8번
    {
      id: 'sentence8',
      level: 1,
      isFinal: false,
      korean: '잠깐 놀아요.',
      chinese: {
        hanzi: ['玩(儿)', '一会儿'],
        pinyin: ['wán(r)', 'yíhuìr'],
      },
    },
    {
      id: 'sentence8',
      level: 2,
      isFinal: false,
      korean: '잠깐 놀아도 돼요.',
      chinese: {
        hanzi: ['可以', '玩(儿)', '一会儿'],
        pinyin: ['kěyǐ', 'wán(r)', 'yíhuìr'],
      },
    },
    {
      id: 'sentence8',
      level: 3,
      isFinal: false,
      korean: '잠깐 놀아도 되죠?',
      chinese: {
        hanzi: ['可以', '玩(儿)', '一会儿', '吗？'],
        pinyin: ['kěyǐ', 'wán(r)', 'yíhuìr', 'ma'],
      },
    },
    {
      id: 'sentence8',
      level: 4,
      isFinal: false,
      korean: '나갔어요.',
      chinese: {
        hanzi: ['出去了'],
        pinyin: ['chūqù le'],
      },
    },
    {
      id: 'sentence8',
      level: 5,
      isFinal: false,
      korean: '방금 나갔어요.',
      chinese: {
        hanzi: ['刚', '出去了'],
        pinyin: ['gāng', 'chūqù le'],
      },
    },
    {
      id: 'sentence8',
      level: 6,
      isFinal: false,
      korean: '선생님은 방금 나갔어요.',
      chinese: {
        hanzi: ['老师', '刚', '出去了'],
        pinyin: ['lǎoshī', 'gāng', 'chūqù le'],
      },
    },
    {
      id: 'sentence8',
      level: 7,
      isFinal: true,
      korean: 'A: 선생님은 방금 나갔어요. 잠깐 놀아도 되죠?',
      chinese: {
        hanzi: ['老师', '刚', '出去了', '可以', '玩(儿)', '一会儿', '吧'],
        pinyin: [
          'lǎoshī',
          'gāng',
          'chūqù le',
          'kěyǐ',
          'wán(r)',
          'yíhuìr',
          'ba',
        ],
      },
    },
    {
      id: 'sentence8',
      level: 8,
      isFinal: false,
      korean: '휴대폰을 해요.',
      chinese: {
        hanzi: ['玩(儿)', '手机'],
        pinyin: ['wán(r)', 'shǒujī'],
      },
    },
    {
      id: 'sentence8',
      level: 9,
      isFinal: false,
      korean: '휴대폰 하면 안 돼요.',
      chinese: {
        hanzi: ['不能', '玩(儿)', '手机'],
        pinyin: ['bù néng', 'wán(r)', 'shǒujī'],
      },
    },
    {
      id: 'sentence8',
      level: 10,
      isFinal: true,
      korean: 'B: 안 돼요, 휴대폰 하면 안 돼요.',
      chinese: {
        hanzi: ['不行', '不能', '玩(儿)', '手机'],
        pinyin: ['bù xíng', 'bù néng', 'wán(r)', 'shǒujī'],
      },
    },
    // 9번
    {
      id: 'sentence9',
      level: 1,
      isFinal: false,
      korean: '자신이 있어.',
      chinese: {
        hanzi: ['有信心'],
        pinyin: ['yǒu xìnxīn'],
      },
    },
    {
      id: 'sentence9',
      level: 2,
      isFinal: false,
      korean: '자신이 없어.',
      chinese: {
        hanzi: ['没有', '信心'],
        pinyin: ['méiyǒu', 'xìnxīn'],
      },
    },
    {
      id: 'sentence9',
      level: 3,
      isFinal: true,
      korean: 'A: 나는 자신이 없어.',
      chinese: {
        hanzi: ['我', '没有', '信心'],
        pinyin: ['wǒ', 'méiyǒu', 'xìnxīn'],
      },
    },
    {
      id: 'sentence9',
      level: 4,
      isFinal: false,
      korean: '해내다.',
      chinese: {
        hanzi: ['做到'],
        pinyin: ['zuòdào'],
      },
    },
    {
      id: 'sentence9',
      level: 5,
      isFinal: false,
      korean: '해낼 수 있다.',
      chinese: {
        hanzi: ['能够', '做到'],
        pinyin: ['nénggòu', 'zuòdào'],
      },
    },
    {
      id: 'sentence9',
      level: 6,
      isFinal: false,
      korean: '너는 해낼 수 있어.',
      chinese: {
        hanzi: ['你', '能够', '做到'],
        pinyin: ['nǐ', 'nénggòu', 'zuòdào'],
      },
    },
    {
      id: 'sentence9',
      level: 7,
      isFinal: false,
      korean: '자신을 믿어.',
      chinese: {
        hanzi: ['相信', '自己'],
        pinyin: ['xiāngxìn', 'zìjǐ'],
      },
    },
    {
      id: 'sentence9',
      level: 8,
      isFinal: false,
      korean: '자신을 믿어야 해.',
      chinese: {
        hanzi: ['要', '相信', '自己'],
        pinyin: ['yào', 'xiāngxìn', 'zìjǐ'],
      },
    },
    {
      id: 'sentence9',
      level: 9,
      isFinal: true,
      korean: 'B: 너는 충분히 해낼 수 있어. 자신을 믿어야 해.',
      chinese: {
        hanzi: ['你', '能够', '做到', '要', '相信', '自己'],
        pinyin: ['nǐ', 'nénggòu', 'zuòdào', 'yào', 'xiāngxìn', 'zìjǐ'],
      },
    },

    // 10번
    {
      id: 'sentence10',
      level: 1,
      isFinal: false,
      korean: '자리(사람) 있어요.',
      chinese: {
        hanzi: ['有人'],
        pinyin: ['yǒu rén'],
      },
    },
    {
      id: 'sentence10',
      level: 2,
      isFinal: false,
      korean: '여기 자리(사람) 있어요.',
      chinese: {
        hanzi: ['这儿', '有', '人'],
        pinyin: ['zhèr', 'yǒu', 'rén'],
      },
    },
    {
      id: 'sentence10',
      level: 3,
      isFinal: true,
      korean: 'A: 여기 자리(사람) 있나요?',
      chinese: {
        hanzi: ['这儿', '有', '人', '吗？'],
        pinyin: ['zhèr', 'yǒu', 'rén', 'ma'],
      },
    },
    {
      id: 'sentence10',
      level: 4,
      isFinal: false,
      korean: '여기 앉아요.',
      chinese: {
        hanzi: ['坐', '这儿'],
        pinyin: ['zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence10',
      level: 5,
      isFinal: false,
      korean: '여기 앉아도 돼요.',
      chinese: {
        hanzi: ['可以', '坐', '这儿'],
        pinyin: ['kěyǐ', 'zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence10',
      level: 6,
      isFinal: false,
      korean: '당신은 여기 앉아도 돼요.',
      chinese: {
        hanzi: ['你', '可以', '坐', '这儿'],
        pinyin: ['nǐ', 'kěyǐ', 'zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence10',
      level: 7,
      isFinal: false,
      korean: '사람 없어요(빈자리예요).',
      chinese: {
        hanzi: ['没有人'],
        pinyin: ['méiyǒu rén'],
      },
    },
    {
      id: 'sentence10',
      level: 8,
      isFinal: false,
      korean: '여기 사람 없어요(빈자리예요).',
      chinese: {
        hanzi: ['这儿', '没有', '人'],
        pinyin: ['zhèr', 'méiyǒu', 'rén'],
      },
    },
    {
      id: 'sentence10',
      level: 9,
      isFinal: true,
      korean: 'B: 당신은 여기 앉아도 돼요. 여기 사람 없어요(빈자리예요).',
      chinese: {
        hanzi: ['你', '可以', '坐', '这儿', '没有', '人'],
        pinyin: ['nǐ', 'kěyǐ', 'zuò', 'zhèr', 'méiyǒu', 'rén'],
      },
    },
  ],
  day2: [
    // 11번
    {
      id: 'sentence11',
      level: 1,
      isFinal: false,
      korean: '담배 피워요.',
      chinese: {
        hanzi: ['抽烟'],
        pinyin: ['chōu yān'],
      },
    },
    {
      id: 'sentence11',
      level: 2,
      isFinal: false,
      korean: '담배 피워도 돼요.',
      chinese: {
        hanzi: ['可以', '抽烟'],
        pinyin: ['kěyǐ', 'chōu yān'],
      },
    },
    {
      id: 'sentence11',
      level: 3,
      isFinal: false,
      korean: '담배 피면 안 돼요.',
      chinese: {
        hanzi: ['不可以', '抽烟'],
        pinyin: ['bù kěyǐ', 'chōu yān'],
      },
    },
    {
      id: 'sentence11',
      level: 4,
      isFinal: true,
      korean: 'A: 여기서 담배 피면 안 돼요.',
      chinese: {
        hanzi: ['这里', '不可以', '抽烟'],
        pinyin: ['zhèlǐ', 'bù kěyǐ', 'chōu yān'],
      },
    },
    {
      id: 'sentence11',
      level: 5,
      isFinal: true,
      korean: 'B: 미안해요.',
      chinese: {
        hanzi: ['不好意思'],
        pinyin: ['bù hǎoyìsi'],
      },
    },

    // 12번
    {
      id: 'sentence12',
      level: 1,
      isFinal: false,
      korean: '경쟁이 세요.',
      chinese: {
        hanzi: ['竞争', '大'],
        pinyin: ['jìngzhēng', 'dà'],
      },
    },
    {
      id: 'sentence12',
      level: 2,
      isFinal: false,
      korean: '경쟁이 엄청 세요.',
      chinese: {
        hanzi: ['竞争', '特别', '大'],
        pinyin: ['jìngzhēng', 'tèbié', 'dà'],
      },
    },
    {
      id: 'sentence12',
      level: 3,
      isFinal: true,
      korean: '듣자하니 경쟁이 엄청 세대요.',
      chinese: {
        hanzi: ['听说', '竞争', '特别', '大'],
        pinyin: ['tīngshuō', 'jìngzhēng', 'tèbié', 'dà'],
      },
    },
    {
      id: 'sentence12',
      level: 4,
      isFinal: false,
      korean: '저는 성공해요.',
      chinese: {
        hanzi: ['我', '成功'],
        pinyin: ['wǒ', 'chénggōng'],
      },
    },
    {
      id: 'sentence12',
      level: 5,
      isFinal: false,
      korean: '저는 성공할 거에요.',
      chinese: {
        hanzi: ['我', '要', '成功'],
        pinyin: ['wǒ', 'yào', 'chénggōng'],
      },
    },
    {
      id: 'sentence12',
      level: 6,
      isFinal: true,
      korean: 'B: 저는 반드시 성공할 거예요.',
      chinese: {
        hanzi: ['我', '一定要', '成功'],
        pinyin: ['wǒ', 'yídìng', 'yào', 'chénggōng'],
      },
    },
    // 13번
    {
      id: 'sentence13',
      level: 1,
      isFinal: false,
      korean: '공항에 도착해요.',
      chinese: {
        hanzi: ['到', '机场'],
        pinyin: ['dào', 'jīchǎng'],
      },
    },
    {
      id: 'sentence13',
      level: 2,
      isFinal: false,
      korean: '저는 공항에 도착해요.',
      chinese: {
        hanzi: ['我', '到', '机场'],
        pinyin: ['wǒ', 'dào', 'jīchǎng'],
      },
    },
    {
      id: 'sentence13',
      level: 3,
      isFinal: true,
      korean: 'A: 저는 곧 공항에 도착해요.',
      chinese: {
        hanzi: ['我', '快', '到', '机场', '了'],
        pinyin: ['wǒ', 'kuài', 'dào', 'jīchǎng', 'le'],
      },
    },
    {
      id: 'sentence13',
      level: 4,
      isFinal: false,
      korean: '주의해요(조심해요).',
      chinese: {
        hanzi: ['注意'],
        pinyin: ['zhùyì'],
      },
    },
    {
      id: 'sentence13',
      level: 5,
      isFinal: false,
      korean: '안전에 주의해요.',
      chinese: {
        hanzi: ['注意', '安全'],
        pinyin: ['zhùyì', 'ānquán'],
      },
    },
    {
      id: 'sentence13',
      level: 6,
      isFinal: false,
      korean: '안전에 주의해야 해요.',
      chinese: {
        hanzi: ['要', '注意', '安全'],
        pinyin: ['yào', 'zhùyì', 'ānquán'],
      },
    },
    {
      id: 'sentence13',
      level: 7,
      isFinal: true,
      korean: 'B: 운전할 때는 안전에 주의해야 해요.',
      chinese: {
        hanzi: ['开车', '要', '注意', '安全'],
        pinyin: ['kāi chē', 'yào', 'zhùyì', 'ānquán'],
      },
    },
    // 14번
    {
      id: 'sentence14',
      level: 1,
      isFinal: false,
      korean: '얼굴빛이 좋아요.',
      chinese: {
        hanzi: ['脸色', '好'],
        pinyin: ['liǎnsè', 'hǎo'],
      },
    },
    {
      id: 'sentence14',
      level: 2,
      isFinal: false,
      korean: '얼굴빛이 안 좋아요.',
      chinese: {
        hanzi: ['脸色', '不好'],
        pinyin: ['liǎnsè', 'bù hǎo'],
      },
    },
    {
      id: 'sentence14',
      level: 3,
      isFinal: false,
      korean: '얼굴빛이 그다지 좋아 보이지 않아요.',
      chinese: {
        hanzi: ['脸色', '不太', '好'],
        pinyin: ['liǎnsè', 'bù tài', 'hǎo'],
      },
    },
    {
      id: 'sentence14',
      level: 4,
      isFinal: true,
      korean: 'A: 왜 그래요? 얼굴빛이 그다지 좋아 보이지 않아요.',
      chinese: {
        hanzi: ['怎么了', '脸色', '不太', '好'],
        pinyin: ['zěnme le', 'liǎnsè', 'bù tài', 'hǎo'],
      },
    },
    {
      id: 'sentence14',
      level: 5,
      isFinal: false,
      korean: '좀 쉬어요.',
      chinese: {
        hanzi: ['休息', '一下'],
        pinyin: ['xiūxi', 'yíxià'],
      },
    },
    {
      id: 'sentence14',
      level: 6,
      isFinal: false,
      korean: '좀 쉬고 싶어요.',
      chinese: {
        hanzi: ['想', '休息', '一下'],
        pinyin: ['xiǎng', 'xiūxi', 'yíxià'],
      },
    },
    {
      id: 'sentence14',
      level: 7,
      isFinal: true,
      korean: 'B: 저는 좀 쉬고 싶어요.',
      chinese: {
        hanzi: ['我', '想', '休息', '一下'],
        pinyin: ['wǒ', 'xiǎng', 'xiūxi', 'yíxià'],
      },
    },
    // 15번
    {
      id: 'sentence15',
      level: 1,
      isFinal: false,
      korean: '모임이 있어요.',
      chinese: {
        hanzi: ['有', '聚会'],
        pinyin: ['yǒu', 'jùhuì'],
      },
    },
    {
      id: 'sentence15',
      level: 2,
      isFinal: false,
      korean: '오늘 모임이 있어요.',
      chinese: {
        hanzi: ['今天', '有', '聚会'],
        pinyin: ['jīntiān', 'yǒu', 'jùhuì'],
      },
    },
    {
      id: 'sentence15',
      level: 3,
      isFinal: false,
      korean: '안 가요.',
      chinese: {
        hanzi: ['不去'],
        pinyin: ['bú qù'],
      },
    },
    {
      id: 'sentence15',
      level: 4,
      isFinal: false,
      korean: '당신은 안 가세요?',
      chinese: {
        hanzi: ['你', '不去', '吗？'],
        pinyin: ['nǐ', 'bú qù', 'ma'],
      },
    },
    {
      id: 'sentence15',
      level: 5,
      isFinal: true,
      korean: 'A: 오늘 모임 있는데, 당신은 안 가세요?',
      chinese: {
        hanzi: ['今天', '有', '聚会', '你', '不去', '吗？'],
        pinyin: ['jīntiān', 'yǒu', 'jùhuì', 'nǐ', 'bú qù', 'ma'],
      },
    },
    {
      id: 'sentence15',
      level: 6,
      isFinal: false,
      korean: '(밖에) 나가요.',
      chinese: {
        hanzi: ['出门'],
        pinyin: ['chū mén'],
      },
    },
    {
      id: 'sentence15',
      level: 7,
      isFinal: false,
      korean: '(밖에) 나가고 싶어요.',
      chinese: {
        hanzi: ['想', '出门'],
        pinyin: ['xiǎng', 'chū mén'],
      },
    },
    {
      id: 'sentence15',
      level: 8,
      isFinal: false,
      korean: '(밖에) 나가고 싶지 않아요.',
      chinese: {
        hanzi: ['不想', '出门'],
        pinyin: ['bù xiǎng', 'chū mén'],
      },
    },
    {
      id: 'sentence15',
      level: 9,
      isFinal: false,
      korean: '오늘 (밖에) 나가고 싶지 않아요.',
      chinese: {
        hanzi: ['今天', '不想', '出门'],
        pinyin: ['jīntiān', 'bù xiǎng', 'chū mén'],
      },
    },
    {
      id: 'sentence15',
      level: 10,
      isFinal: true,
      korean: 'B: 저는 오늘 (밖에) 나가고 싶지 않아요.',
      chinese: {
        hanzi: ['我', '今天', '不想', '出门'],
        pinyin: ['wǒ', 'jīntiān', 'bù xiǎng', 'chū mén'],
      },
    },
    // 16번
    {
      id: 'sentence16',
      level: 1,
      isFinal: false,
      korean: '머리가 아파요.',
      chinese: {
        hanzi: ['头疼'],
        pinyin: ['tóuténg'],
      },
    },
    {
      id: 'sentence16',
      level: 2,
      isFinal: false,
      korean: '계속 머리가 아파요.',
      chinese: {
        hanzi: ['一直', '头疼'],
        pinyin: ['yìzhí', 'tóuténg'],
      },
    },
    {
      id: 'sentence16',
      level: 3,
      isFinal: false,
      korean: '요 며칠 계속 머리가 아파요.',
      chinese: {
        hanzi: ['这几天', '一直', '头疼'],
        pinyin: ['zhè jǐ tiān', 'yìzhí', 'tóuténg'],
      },
    },
    {
      id: 'sentence16',
      level: 4,
      isFinal: true,
      korean: 'A: 저는 요 며칠 계속 머리가 아파요.',
      chinese: {
        hanzi: ['我', '这几天', '一直', '头疼'],
        pinyin: ['wǒ', 'zhè jǐ tiān', 'yìzhí', 'tóuténg'],
      },
    },
    {
      id: 'sentence16',
      level: 5,
      isFinal: false,
      korean: '더 쉬어요.',
      chinese: {
        hanzi: ['多', '休息'],
        pinyin: ['duō', 'xiūxi'],
      },
    },
    {
      id: 'sentence16',
      level: 6,
      isFinal: false,
      korean: '더 쉬어야 해요.',
      chinese: {
        hanzi: ['应该', '多', '休息'],
        pinyin: ['yīnggāi', 'duō', 'xiūxi'],
      },
    },
    {
      id: 'sentence16',
      level: 7,
      isFinal: true,
      korean: 'B: 당신은 더 쉬어야 해요.',
      chinese: {
        hanzi: ['你', '应该', '多', '休息'],
        pinyin: ['nǐ', 'yīnggāi', 'duō', 'xiūxi'],
      },
    },
    // 17번
    {
      id: 'sentence17',
      level: 1,
      isFinal: false,
      korean: '기억력이 나빠요.',
      chinese: {
        hanzi: ['记性', '差'],
        pinyin: ['jìxìng', 'chà'],
      },
    },
    {
      id: 'sentence17',
      level: 2,
      isFinal: false,
      korean: '기억력이 나빠졌어요.',
      chinese: {
        hanzi: ['记性', '差', '了'],
        pinyin: ['jìxìng', 'chà', 'le'],
      },
    },
    {
      id: 'sentence17',
      level: 3,
      isFinal: false,
      korean: '기억력이 점점 나빠지고 있어요.',
      chinese: {
        hanzi: ['记性', '越来越', '差', '了'],
        pinyin: ['jìxìng', 'yuèláiyuè', 'chà', 'le'],
      },
    },
    {
      id: 'sentence17',
      level: 4,
      isFinal: false,
      korean: '요즘 기억력이 점점 나빠지고 있어요.',
      chinese: {
        hanzi: ['最近', '记性', '越来越', '差', '了'],
        pinyin: ['zuìjìn', 'jìxìng', 'yuèláiyuè', 'chà', 'le'],
      },
    },
    {
      id: 'sentence17',
      level: 5,
      isFinal: true,
      korean: 'A: 저는 요즘 기억력이 점점 나빠지고 있어요.',
      chinese: {
        hanzi: ['我', '觉得', '最近', '记性', '越来越', '差', '了'],
        pinyin: ['wǒ', 'juéde', 'zuìjìn', 'jìxìng', 'yuèláiyuè', 'chà', 'le'],
      },
    },
    {
      id: 'sentence17',
      level: 6,
      isFinal: false,
      korean: '밤을 새워요.',
      chinese: {
        hanzi: ['熬夜'],
        pinyin: ['áoyè'],
      },
    },
    {
      id: 'sentence17',
      level: 7,
      isFinal: false,
      korean: '자꾸 밤을 새워요.',
      chinese: {
        hanzi: ['总是', '熬夜'],
        pinyin: ['zǒngshì', 'áoyè'],
      },
    },
    {
      id: 'sentence17',
      level: 8,
      isFinal: false,
      korean: '자꾸 밤새면 안 돼요.',
      chinese: {
        hanzi: ['不应该', '总是', '熬夜'],
        pinyin: ['bù yīnggāi', 'zǒngshì', 'áoyè'],
      },
    },
    {
      id: 'sentence17',
      level: 9,
      isFinal: true,
      korean: 'B: 당신은 자꾸 밤새면 안 돼요.',
      chinese: {
        hanzi: ['你', '不应该', '总是', '熬夜'],
        pinyin: ['nǐ', 'bù yīnggāi', 'zǒngshì', 'áoyè'],
      },
    },
    // 18번
    {
      id: 'sentence18',
      level: 1,
      isFinal: false,
      korean: '조금 마셔요.',
      chinese: {
        hanzi: ['喝', '一点'],
        pinyin: ['hē', 'yìdiǎn'],
      },
    },
    {
      id: 'sentence18',
      level: 2,
      isFinal: false,
      korean: '조금 더 마셔요?',
      chinese: {
        hanzi: ['再', '喝', '一点'],
        pinyin: ['zài', 'hē', 'yìdiǎn'],
      },
    },
    {
      id: 'sentence18',
      level: 3,
      isFinal: true,
      korean: 'A: 조금 더 마실래요?',
      chinese: {
        hanzi: ['要', '不要', '再', '喝', '一点'],
        pinyin: ['yào', 'bù yào', 'zài', 'hē', 'yìdiǎn'],
      },
    },
    {
      id: 'sentence18',
      level: 4,
      isFinal: false,
      korean: '갔어요(떠났어요).',
      chinese: {
        hanzi: ['走了', '吗？'],
        pinyin: ['zǒu le', 'ma'],
      },
    },
    {
      id: 'sentence18',
      level: 5,
      isFinal: false,
      korean: '가야 해요.',
      chinese: {
        hanzi: ['得', '走', '了'],
        pinyin: ['děi', 'zǒu', 'le'],
      },
    },
    {
      id: 'sentence18',
      level: 6,
      isFinal: false,
      korean: '저는 가야 해요.',
      chinese: {
        hanzi: ['我', '得', '走', '了'],
        pinyin: ['wǒ', 'děi', 'zǒu', 'le'],
      },
    },
    {
      id: 'sentence18',
      level: 7,
      isFinal: false,
      korean: '안 마셔요.',
      chinese: {
        hanzi: ['不', '喝'],
        pinyin: ['bù', 'hē'],
      },
    },
    {
      id: 'sentence18',
      level: 8,
      isFinal: false,
      korean: '안 마실래요.',
      chinese: {
        hanzi: ['不', '喝', '了'],
        pinyin: ['bù', 'hē', 'le'],
      },
    },
    {
      id: 'sentence18',
      level: 9,
      isFinal: true,
      korean: 'B: 안 마실래요, 저 가야 해요.',
      chinese: {
        hanzi: ['不', '喝', '了，', '我', '得', '走', '了'],
        pinyin: ['bù', 'hē', 'le', 'wǒ', 'děi', 'zǒu', 'le'],
      },
    },
    // 19번
    {
      id: 'sentence19',
      level: 1,
      isFinal: false,
      korean: '무슨 말을 하는 거야? (뭐라고?)',
      chinese: {
        hanzi: ['说什么'],
        pinyin: ['shuō shénme'],
      },
    },
    {
      id: 'sentence19',
      level: 2,
      isFinal: false,
      korean: '(말투를 부드럽게) 무슨 말을 하는 거야?',
      chinese: {
        hanzi: ['说什么呀'],
        pinyin: ['shuō shénme ya'],
      },
    },
    {
      id: 'sentence19',
      level: 3,
      isFinal: false,
      korean: '너는 무슨 말을 하는 거야?',
      chinese: {
        hanzi: ['你', '说什么呀'],
        pinyin: ['nǐ', 'shuō shénme ya'],
      },
    },
    {
      id: 'sentence19',
      level: 4,
      isFinal: false,
      korean: '너는 무슨 말을 하고 싶은 거야?',
      chinese: {
        hanzi: ['你', '想', '说什么呀'],
        pinyin: ['nǐ', 'xiǎng', 'shuō shénme ya'],
      },
    },
    {
      id: 'sentence19',
      level: 5,
      isFinal: true,
      korean: 'B: 너는 도대체 무슨 말을 하고 싶은 거야?',
      chinese: {
        hanzi: ['你', '到底', '想', '说什么呀'],
        pinyin: ['nǐ', 'dàodǐ', 'xiǎng', 'shuō shénme ya'],
      },
    },
    {
      id: 'sentence19',
      level: 6,
      isFinal: false,
      korean: '나에게 시집 와.',
      chinese: {
        hanzi: ['嫁', '给我'],
        pinyin: ['jià', 'gěi', 'wǒ'],
      },
    },
    {
      id: 'sentence19',
      level: 7,
      isFinal: false,
      korean: '너는 나에게 시집 와.',
      chinese: {
        hanzi: ['你', '嫁', '给我'],
        pinyin: ['nǐ', 'jià', 'gěi', 'wǒ'],
      },
    },
    {
      id: 'sentence19',
      level: 8,
      isFinal: true,
      korean: '너는 나에게 시집 올래? (결혼할래?)',
      chinese: {
        hanzi: ['你', '嫁', '给我', '吗？'],
        pinyin: ['nǐ', 'jià', 'gěi', 'wǒ', 'ma'],
      },
    },
    {
      id: 'sentence19',
      level: 9,
      isFinal: true,
      korean: 'B: 너는 나에게 시집 와 줄래? (결혼해 줄래?)',
      chinese: {
        hanzi: ['你', '愿意', '嫁', '给我', '吗？'],
        pinyin: ['nǐ', 'yuànyì', 'jià', 'gěi', 'wǒ', 'ma'],
      },
    },
    // 20번
    {
      id: 'sentence20',
      level: 1,
      isFinal: false,
      korean: '의견을 받아들이다.',
      chinese: {
        hanzi: ['接受', '意见'],
        pinyin: ['jiēshòu', 'yìjiàn'],
      },
    },
    {
      id: 'sentence20',
      level: 2,
      isFinal: false,
      korean: '다른 사람의 의견(남의 의견)',
      chinese: {
        hanzi: ['别人', '的', '意见'],
        pinyin: ['biérén', 'de', 'yìjiàn'],
      },
    },
    {
      id: 'sentence20',
      level: 3,
      isFinal: false,
      korean: '남의 의견을 받아들이다.',
      chinese: {
        hanzi: ['接受', '别人的', '意见'],
        pinyin: ['jiēshòu', 'biérén', 'de', 'yìjiàn'],
      },
    },
    {
      id: 'sentence20',
      level: 4,
      isFinal: false,
      korean: '남의 의견을 받아들이지 않는다.',
      chinese: {
        hanzi: ['不', '接受', '别人的', '意见'],
        pinyin: ['bù', 'jiēshòu', 'biérén', 'de', 'yìjiàn'],
      },
    },
    {
      id: 'sentence20',
      level: 5,
      isFinal: true,
      korean: '남의 의견을 여태껏 받아들이지 않는다.',
      chinese: {
        hanzi: ['从来不', '接受', '别人的', '意见'],
        pinyin: ['cónglái', 'bù', 'jiēshòu', 'biérén', 'de', 'yìjiàn'],
      },
    },
    {
      id: 'sentence20',
      level: 6,
      isFinal: true,
      korean: '그 사람은 남의 의견을 여태껏 안 받아들여(받아들인 적이 없어).',
      chinese: {
        hanzi: ['他', '从来不', '接受', '别人的', '意见'],
        pinyin: ['tā', 'cónglái', 'bù', 'jiēshòu', 'biérén', 'de', 'yìjiàn'],
      },
    },
    {
      id: 'sentence20',
      level: 7,
      isFinal: false,
      korean: '생각을 바꾸다.',
      chinese: {
        hanzi: ['改变', '想法'],
        pinyin: ['gǎibiàn', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence20',
      level: 8,
      isFinal: false,
      korean: '자신의 생각을 바꾸다.',
      chinese: {
        hanzi: ['改变', '自己的', '想法'],
        pinyin: ['gǎibiàn', 'zìjǐ', 'de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence20',
      level: 9,
      isFinal: false,
      korean: '자신의 생각을 바꾸길 원하지 않아.',
      chinese: {
        hanzi: ['不愿意', '改变', '自己的', '想法'],
        pinyin: ['bú yuànyì', 'gǎibiàn', 'zìjǐ', 'de', 'xiǎngfǎ'],
      },
    },
    {
      id: 'sentence20',
      level: 10,
      isFinal: true,
      korean: 'B: 어떤 사람들은 자신의 생각을 바꾸길 원하지 않아.',
      chinese: {
        hanzi: ['有些人', '不愿意', '改变', '自己的', '想法'],
        pinyin: [
          'yǒuxiē',
          'rén',
          'bú yuànyì',
          'gǎibiàn',
          'zìjǐ',
          'de',
          'xiǎngfǎ',
        ],
      },
    },
  ],

  day3: [
    // 21번
    {
      id: 'sentence21',
      level: 1,
      isFinal: false,
      korean: '스카이다이빙하다.',
      chinese: {
        hanzi: ['跳伞'],
        pinyin: ['tiàosǎn'],
      },
    },
    {
      id: 'sentence21',
      level: 2,
      isFinal: false,
      korean: '스카이다이빙 할 수 있겠다(해볼 용기 있다).',
      chinese: {
        hanzi: ['敢', '跳伞'],
        pinyin: ['gǎn', 'tiàosǎn'],
      },
    },
    {
      id: 'sentence21',
      level: 3,
      isFinal: true,
      korean: 'A: 너는 스카이다이빙 할 수 있겠어(해볼 용기 있어)?',
      chinese: {
        hanzi: ['你', '敢', '跳伞', '吗？'],
        pinyin: ['nǐ', 'gǎn', 'tiàosǎn', 'ma'],
      },
    },
    {
      id: 'sentence21',
      level: 4,
      isFinal: false,
      korean: '한 번 해보다.',
      chinese: {
        hanzi: ['试试'],
        pinyin: ['shìshi'],
      },
    },
    {
      id: 'sentence21',
      level: 5,
      isFinal: false,
      korean: '한 번 해보고 싶다.',
      chinese: {
        hanzi: ['想', '试试'],
        pinyin: ['xiǎng', 'shìshi'],
      },
    },
    {
      id: 'sentence21',
      level: 6,
      isFinal: false,
      korean: '나는 한 번 해보고 싶어.',
      chinese: {
        hanzi: ['我', '想', '试试'],
        pinyin: ['wǒ', 'xiǎng', 'shìshi'],
      },
    },
    {
      id: 'sentence21',
      level: 7,
      isFinal: false,
      korean: '좀 무서워.',
      chinese: {
        hanzi: ['有点', '怕'],
        pinyin: ['yǒudiǎn', 'pà'],
      },
    },
    {
      id: 'sentence21',
      level: 8,
      isFinal: false,
      korean: '……, 근데 좀 무서워.',
      chinese: {
        hanzi: ['……, 但', '有点', '怕'],
        pinyin: ['dàn', 'yǒudiǎn', 'pà'],
      },
    },
    {
      id: 'sentence21',
      level: 9,
      isFinal: true,
      korean: 'B: 나는 한 번 해보고 싶긴 한데 근데 좀 무서워.',
      chinese: {
        hanzi: ['我', '想', '试试', '但', '有点', '怕'],
        pinyin: ['wǒ', 'xiǎng', 'shìshi', 'dàn', 'yǒudiǎn', 'pà'],
      },
    },
    // 22번
    {
      id: 'sentence22',
      level: 1,
      isFinal: false,
      korean: '혼자 가다.',
      chinese: {
        hanzi: ['一个人', '去'],
        pinyin: ['yíge', 'rén', 'qù'],
      },
    },
    {
      id: 'sentence22',
      level: 2,
      isFinal: false,
      korean: '혼자 갈 엄두가 안 나다.',
      chinese: {
        hanzi: ['不敢', '一个人', '去'],
        pinyin: ['bù gǎn', 'yíge', 'rén', 'qù'],
      },
    },
    {
      id: 'sentence22',
      level: 3,
      isFinal: true,
      korean: 'A: 나는 혼자 갈 엄두가 안 나다.',
      chinese: {
        hanzi: ['我', '不敢', '一个人', '去'],
        pinyin: ['wǒ', 'bù gǎn', 'yíge', 'rén', 'qù'],
      },
    },
    {
      id: 'sentence22',
      level: 4,
      isFinal: false,
      korean: '같이 가다.',
      chinese: {
        hanzi: ['一起', '去'],
        pinyin: ['yìqǐ', 'qù'],
      },
    },
    {
      id: 'sentence22',
      level: 5,
      isFinal: false,
      korean: '우리 같이 갈까?',
      chinese: {
        hanzi: ['我们', '一起', '去'],
        pinyin: ['wǒmen', 'yìqǐ', 'qù'],
      },
    },
    {
      id: 'sentence22',
      level: 6,
      isFinal: true,
      korean: 'B: 아니면 우리 같이 갈까?',
      chinese: {
        hanzi: ['要不', '我们', '一起去'],
        pinyin: ['yàobù', 'wǒmen', 'yìqǐ', 'qù'],
      },
    },
    // 23번
    {
      id: 'sentence23',
      level: 1,
      isFinal: false,
      korean: '갈 수 없어(못 가).',
      chinese: {
        hanzi: ['去不了'],
        pinyin: ['qù bù liǎo'],
      },
    },
    {
      id: 'sentence23',
      level: 2,
      isFinal: false,
      korean: '아마 못 갈 수도 있어.',
      chinese: {
        hanzi: ['可能', '去', '不了'],
        pinyin: ['kěnéng', 'qù', 'bù liǎo'],
      },
    },
    {
      id: 'sentence23',
      level: 3,
      isFinal: true,
      korean: 'A: 나는 아마 못 갈 수도 있어.',
      chinese: {
        hanzi: ['我', '可能', '去', '不了'],
        pinyin: ['wǒ', 'kěnéng', 'qù', 'bù liǎo'],
      },
    },
    {
      id: 'sentence23',
      level: 4,
      isFinal: false,
      korean: '반드시 와야 해.',
      chinese: {
        hanzi: ['必须', '来'],
        pinyin: ['bìxū', 'lái'],
      },
    },
    {
      id: 'sentence23',
      level: 5,
      isFinal: true,
      korean: 'B: 너는 반드시 와야 해.',
      chinese: {
        hanzi: ['你', '必须', '来'],
        pinyin: ['nǐ', 'bìxū', 'lái'],
      },
    },
    // 24번
    {
      id: 'sentence24',
      level: 1,
      isFinal: false,
      korean: '읽어봤어요.',
      chinese: {
        hanzi: ['看过'],
        pinyin: ['kànguò'],
      },
    },
    {
      id: 'sentence24',
      level: 2,
      isFinal: false,
      korean: '책을 읽어봤어요.',
      chinese: {
        hanzi: ['看过', '书'],
        pinyin: ['kànguò', 'shū'],
      },
    },
    {
      id: 'sentence24',
      level: 3,
      isFinal: false,
      korean: '이 책',
      chinese: {
        hanzi: ['这', '本书'],
        pinyin: ['zhè', 'běn shū'],
      },
    },
    {
      id: 'sentence24',
      level: 4,
      isFinal: false,
      korean: '이 책을 읽어봤어요.',
      chinese: {
        hanzi: ['看过', '这', '本书'],
        pinyin: ['kànguò', 'zhè', 'běn shū'],
      },
    },
    {
      id: 'sentence24',
      level: 5,
      isFinal: false,
      korean: '이 책을 읽어봤어요?',
      chinese: {
        hanzi: ['看过', '这', '本书', '吗？'],
        pinyin: ['kànguò', 'zhè', 'běn shū', 'ma'],
      },
    },
    {
      id: 'sentence24',
      level: 6,
      isFinal: true,
      korean: 'A: 당신은 이 책을 읽어봤어요?',
      chinese: {
        hanzi: ['你', '看过', '这', '本书', '吗？'],
        pinyin: ['nǐ', 'kànguò', 'zhè', 'běn shū', 'ma'],
      },
    },
    {
      id: 'sentence24',
      level: 7,
      isFinal: false,
      korean: '읽을 만해요(읽어 볼 가치가 있어요).',
      chinese: {
        hanzi: ['值得', '看'],
        pinyin: ['zhídé', 'kàn'],
      },
    },
    {
      id: 'sentence24',
      level: 8,
      isFinal: false,
      korean: '이 책은 읽을 만해요(읽어 볼 가치가 있어요).',
      chinese: {
        hanzi: ['这', '本书', '值得', '看'],
        pinyin: ['zhè', 'běn shū', 'zhídé', 'kàn'],
      },
    },
    {
      id: 'sentence24',
      level: 9,
      isFinal: true,
      korean: 'B: 읽어봤어요, 이 책은 읽을 만해요(읽어 볼 가치가 있어요).',
      chinese: {
        hanzi: ['看过', '这', '本书', '值得', '看'],
        pinyin: ['kànguò', 'zhè', 'běn shū', 'zhídé', 'kàn'],
      },
    },
    // 25번
    {
      id: 'sentence25',
      level: 1,
      isFinal: false,
      korean: '태도가 별로야.',
      chinese: {
        hanzi: ['态度', '差'],
        pinyin: ['tàidù', 'chà'],
      },
    },
    {
      id: 'sentence25',
      level: 2,
      isFinal: false,
      korean: '태도가 너무 별로야!',
      chinese: {
        hanzi: ['态度', '太', '差', '了'],
        pinyin: ['tàidù', 'tài', 'chà', 'le'],
      },
    },
    {
      id: 'sentence25',
      level: 3,
      isFinal: true,
      korean: 'A: 점원 태도가 너무 별로야!',
      chinese: {
        hanzi: ['服务员', '态度', '太', '差', '了'],
        pinyin: ['fúwùyuán', 'tàidù', 'tài', 'chà', 'le'],
      },
    },
    {
      id: 'sentence25',
      level: 4,
      isFinal: false,
      korean: '화낼 만해(화낼 가치가 있어).',
      chinese: {
        hanzi: ['值得', '生气'],
        pinyin: ['zhídé', 'shēng qì'],
      },
    },
    {
      id: 'sentence25',
      level: 5,
      isFinal: false,
      korean: '화낼 만한 게 아니야(화낼 가치가 없어).',
      chinese: {
        hanzi: ['不值得', '生气'],
        pinyin: ['bù zhídé', 'shēng qì'],
      },
    },
    {
      id: 'sentence25',
      level: 6,
      isFinal: false,
      korean: '전혀 화낼 만한 게 아니야(화낼 가치가 없어).',
      chinese: {
        hanzi: ['根本', '不值得', '生气'],
        pinyin: ['gēnběn', 'bù zhídé', 'shēng qì'],
      },
    },
    {
      id: 'sentence25',
      level: 7,
      isFinal: false,
      korean: '사소한 일은 전혀 화낼 만한 게 아니야(화낼 가치가 없어).',
      chinese: {
        hanzi: ['小事', '根本', '不值得', '生气'],
        pinyin: ['xiaoshì', 'gēmběn', 'bù zhídé', 'shēng qì'],
      },
    },
    {
      id: 'sentence25',
      level: 8,
      isFinal: false,
      korean: '이런 사소한 일',
      chinese: {
        hanzi: ['这种', '小事'],
        pinyin: ['zhè zhǒng', 'xiaoshì'],
      },
    },
    {
      id: 'sentence25',
      level: 9,
      isFinal: true,
      korean: 'B: 이런 사소한 일은 전혀 화낼 만한 게 아니야(화낼 가치가 없어).',
      chinese: {
        hanzi: ['这种', '小事', '根本', '不值得', '生气'],
        pinyin: ['zhè zhǒng', 'xiaoshì', 'gēmběn', 'bù zhídé', 'shēng qì'],
      },
    },
    // 26번
    {
      id: 'sentence26',
      level: 1,
      isFinal: false,
      korean: '중국어를 말해요.',
      chinese: {
        hanzi: ['说', '汉语'],
        pinyin: ['shuō', 'hànyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 2,
      isFinal: false,
      korean: '중국어를 말할 줄 알아요.',
      chinese: {
        hanzi: ['会', '说', '汉语'],
        pinyin: ['huì', 'shuō', 'hànyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 3,
      isFinal: false,
      korean: '저는 중국어를 말할 줄 알아요.',
      chinese: {
        hanzi: ['我', '会', '说', '汉语'],
        pinyin: ['wǒ', 'huì', 'shuō', 'hànyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 4,
      isFinal: false,
      korean: '영어를 말해요.',
      chinese: {
        hanzi: ['说', '英语'],
        pinyin: ['shuō', 'yīngyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 5,
      isFinal: false,
      korean: '영어를 말할 줄 알아요.',
      chinese: {
        hanzi: ['会', '说', '英语'],
        pinyin: ['huì', 'shuō', 'yīngyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 6,
      isFinal: false,
      korean: '……, 영어도 말할 줄 알아요.',
      chinese: {
        hanzi: ['……, 也', '会', '说', '英语'],
        pinyin: ['……, yě', 'huì', 'shuō', 'yīngyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 7,
      isFinal: true,
      korean: 'A: 저는 중국어도 말할 줄 알고, 영어도 말할 줄 알아요.',
      chinese: {
        hanzi: ['我', '会', '说', '汉语', '也会', '说', '英语'],
        pinyin: ['wǒ', 'huì', 'shuō', 'hànyǔ', 'yě', 'huì', 'shuō', 'yīngyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 8,
      isFinal: false,
      korean: '중국어를 말해요.',
      chinese: {
        hanzi: ['说', '汉语'],
        pinyin: ['shuō', 'hànyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 9,
      isFinal: true,
      korean: '중국어를 말할 줄 알아요.',
      chinese: {
        hanzi: ['会', '说', '汉语'],
        pinyin: ['huì', 'shuō', 'hànyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 10,
      isFinal: false,
      korean: '중국어밖에 말할 줄 몰라요.',
      chinese: {
        hanzi: ['只会', '说', '汉语'],
        pinyin: ['zhǐ huì', 'shuō', 'hànyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 11,
      isFinal: false,
      korean: '저는 중국어밖에 말할 줄 몰라요.',
      chinese: {
        hanzi: ['我', '只', '会', '说', '汉语'],
        pinyin: ['wǒ', 'zhǐ', 'huì', 'shuō', 'hànyǔ'],
      },
    },
    {
      id: 'sentence26',
      level: 12,
      isFinal: false,
      korean: '당신이 부러워요.',
      chinese: {
        hanzi: ['羡慕', '你'],
        pinyin: ['xiànmù', 'nǐ'],
      },
    },
    {
      id: 'sentence26',
      level: 13,
      isFinal: false,
      korean: '진짜 당신이 부러워요.',
      chinese: {
        hanzi: ['真', '羡慕', '你'],
        pinyin: ['zhēn', 'xiànmù', 'nǐ'],
      },
    },
    {
      id: 'sentence26',
      level: 14,
      isFinal: true,
      korean: 'B: 저는 중국어밖에 말할 줄 몰라요, 진짜 당신이 부러워요!',
      chinese: {
        hanzi: ['我', '只', '会', '说', '汉语', '真', '羡慕', '你'],
        pinyin: ['wǒ', 'zhǐ', 'huì', 'shuō', 'hànyǔ', 'zhēn', 'xiànmù', 'nǐ'],
      },
    },

    // 27번
    {
      id: 'sentence27',
      level: 1,
      isFinal: false,
      korean: '비가 와요.',
      chinese: {
        hanzi: ['下雨'],
        pinyin: ['xià yǔ'],
      },
    },
    {
      id: 'sentence27',
      level: 2,
      isFinal: false,
      korean: '비가 올 거에요.',
      chinese: {
        hanzi: ['会', '下雨'],
        pinyin: ['huì', 'xià yǔ'],
      },
    },
    {
      id: 'sentence27',
      level: 3,
      isFinal: false,
      korean: '내일 비가 올 거에요.',
      chinese: {
        hanzi: ['明天', '会', '下雨'],
        pinyin: ['míngtiān', 'huì', 'xià yǔ'],
      },
    },
    {
      id: 'sentence27',
      level: 4,
      isFinal: false,
      korean: '일기예보에 따르면 ……래요.',
      chinese: {
        hanzi: ['天气预报', '说……'],
        pinyin: ['tiānqì yùbào', 'shuō……'],
      },
    },
    {
      id: 'sentence27',
      level: 5,
      isFinal: false,
      korean: '일기예보에 따르면 내일 비가 올 거래요.',
      chinese: {
        hanzi: ['天气预报', '说明天', '会', '下雨'],
        pinyin: ['tiānqì yùbào', 'shuō', 'míngtiān', 'huì', 'xià yǔ'],
      },
    },
    {
      id: 'sentence27',
      level: 6,
      isFinal: false,
      korean: '폭우래요(비가 많이 내린대요).',
      chinese: {
        hanzi: ['是大雨'],
        pinyin: ['shì dà yǔ'],
      },
    },
    {
      id: 'sentence27',
      level: 7,
      isFinal: false,
      korean: '……, 게다가 폭우래요(비가 많이 내린대요).',
      chinese: {
        hanzi: ['……, 而且', '是大雨'],
        pinyin: ['……, érqiě', 'shì dà yǔ'],
      },
    },
    {
      id: 'sentence27',
      level: 8,
      isFinal: true,
      korean:
        'A: 일기예보에 따르면 내일 비가 올 거래요, 게다가 폭우래요(비가 많이 내린대요).',
      chinese: {
        hanzi: ['天气预报', '说明天', '会', '下雨', '而且', '是大雨'],
        pinyin: [
          'tiānqì yùbào',
          'shuō',
          'míngtiān',
          'huì',
          'xià yǔ',
          'érqiě',
          'shì dà yǔ',
        ],
      },
    },
    {
      id: 'sentence27',
      level: 9,
      isFinal: false,
      korean: '다른 날에 가요.',
      chinese: {
        hanzi: ['改天', '去'],
        pinyin: ['gǎitiān', 'qù'],
      },
    },
    {
      id: 'sentence27',
      level: 10,
      isFinal: false,
      korean: '다른 날에 가는 게 좋겠어요.',
      chinese: {
        hanzi: ['还是', '改天', '去', '吧'],
        pinyin: ['háishi', 'gǎitiān', 'qù', 'ba'],
      },
    },
    {
      id: 'sentence27',
      level: 11,
      isFinal: false,
      korean: '저는 다른 날에 가는 게 좋겠어요.',
      chinese: {
        hanzi: ['我', '还是', '改天', '去', '吧'],
        pinyin: ['wǒ', 'háishi', 'gǎitiān', 'qù', 'ba'],
      },
    },
    {
      id: 'sentence27',
      level: 12,
      isFinal: true,
      korean: 'B: 저는 다른 날에 가는 게 좋겠어요.',
      chinese: {
        hanzi: ['那', '我', '还是', '改天', '去', '吧'],
        pinyin: ['nà', 'wǒ', 'háishi', 'gǎitiān', 'qù', 'ba'],
      },
    },
    // 28번
    {
      id: 'sentence28',
      level: 1,
      isFinal: false,
      korean: '운전해요.',
      chinese: {
        hanzi: ['开车'],
        pinyin: ['kāi chē'],
      },
    },
    {
      id: 'sentence28',
      level: 2,
      isFinal: false,
      korean: '운전할 줄 알아요.',
      chinese: {
        hanzi: ['会', '开车'],
        pinyin: ['huì', 'kāi chē'],
      },
    },
    {
      id: 'sentence28',
      level: 3,
      isFinal: false,
      korean: '운전할 줄 몰라요.',
      chinese: {
        hanzi: ['不会', '开车'],
        pinyin: ['bú huì', 'kāi chē'],
      },
    },
    {
      id: 'sentence28',
      level: 4,
      isFinal: true,
      korean: 'A: 그녀는 운전할 줄 몰라요.',
      chinese: {
        hanzi: ['她', '不会', '开车'],
        pinyin: ['tā', 'bú huì', 'kāi chē'],
      },
    },
    {
      id: 'sentence28',
      level: 5,
      isFinal: false,
      korean: '지하철을 타요.',
      chinese: {
        hanzi: ['坐', '地铁'],
        pinyin: ['zuò', 'dìtiě'],
      },
    },
    {
      id: 'sentence28',
      level: 6,
      isFinal: false,
      korean: '지하철을 타고 출근해요.',
      chinese: {
        hanzi: ['坐', '地铁', '上班'],
        pinyin: ['zuò', 'dìtiě', 'shàng bān'],
      },
    },
    {
      id: 'sentence28',
      level: 7,
      isFinal: false,
      korean: '매일 지하철을 타고 출근해요.',
      chinese: {
        hanzi: ['每天', '坐', '地铁', '上班'],
        pinyin: ['měitiān', 'zuò', 'dìtiě', 'shàng bān'],
      },
    },
    {
      id: 'sentence28',
      level: 8,
      isFinal: false,
      korean: '그래서 매일 지하철을 타고 출근해요.',
      chinese: {
        hanzi: ['所以', '每天', '坐', '地铁', '上班'],
        pinyin: ['suǒyǐ', 'měitiān', 'zuò', 'dìtiě', 'shàng bān'],
      },
    },
    {
      id: 'sentence28',
      level: 9,
      isFinal: true,
      korean: '그녀는 운전할 줄 몰라서 매일 지하철을 타고 출근해요.',
      chinese: {
        hanzi: ['她', '不会', '开车', '所以', '每天', '坐', '地铁', '上班'],
        pinyin: [
          'tā',
          'bú huì',
          'kāi chē',
          'suǒyǐ',
          'měitiān',
          'zuò',
          'dìtiě',
          'shàng bān',
        ],
      },
    },
    {
      id: 'sentence28',
      level: 10,
      isFinal: false,
      korean: '지하철은 빨라요.',
      chinese: {
        hanzi: ['地铁', '快'],
        pinyin: ['dìtiě', 'kuài'],
      },
    },
    {
      id: 'sentence28',
      level: 11,
      isFinal: false,
      korean: '지하철은 저렴해요.',
      chinese: {
        hanzi: ['地铁', '便宜'],
        pinyin: ['dìtiě', 'piányi'],
      },
    },
    {
      id: 'sentence28',
      level: 12,
      isFinal: false,
      korean: '지하철은 …하기도 하고 …하기도 해요.',
      chinese: {
        hanzi: ['地铁', '又……', '又……'],
        pinyin: ['dìtiě', 'yòu', 'yòu'],
      },
    },
    {
      id: 'sentence28',
      level: 13,
      isFinal: false,
      korean: '지하철은 빠르기도 하고 싸기도 해요.',
      chinese: {
        hanzi: ['地铁', '又快', '又便宜'],
        pinyin: ['dìtiě', 'yòu kuài', 'yòu piányi'],
      },
    },
    {
      id: 'sentence28',
      level: 14,
      isFinal: false,
      korean: '얼마나 좋아요.',
      chinese: {
        hanzi: ['多好啊'],
        pinyin: ['duō hǎo a'],
      },
    },
    {
      id: 'sentence28',
      level: 15,
      isFinal: true,
      korean: 'B: 지하철은 빠르기도 하고 싸기도 해요, 얼마나 좋아요.',
      chinese: {
        hanzi: ['地铁', '又', '快', '又', '便宜', '多好啊'],
        pinyin: ['dìtiě', 'yòu', 'kuài', 'yòu', 'piányi', 'duō hǎo a'],
      },
    },
    // 29번
    {
      id: 'sentence29',
      level: 1,
      isFinal: false,
      korean: '잊어요.',
      chinese: {
        hanzi: ['忘记'],
        pinyin: ['Wàngjì'],
      },
    },
    {
      id: 'sentence29',
      level: 2,
      isFinal: false,
      korean: '잊었을 거예요.',
      chinese: {
        hanzi: ['会', '忘记', '的'],
        pinyin: ['huì', 'wàngjì', 'de'],
      },
    },
    {
      id: 'sentence29',
      level: 3,
      isFinal: false,
      korean: '잊지 않았을 거예요.',
      chinese: {
        hanzi: ['不会', '忘记', '的'],
        pinyin: ['bú huì', 'wàngjì', 'de'],
      },
    },
    {
      id: 'sentence29',
      level: 4,
      isFinal: false,
      korean: '그는 잊지 않았을 거예요.',
      chinese: {
        hanzi: ['他', '不会', '忘记', '的'],
        pinyin: ['tā', 'bú huì', 'wàngjì', 'de'],
      },
    },
    {
      id: 'sentence29',
      level: 5,
      isFinal: false,
      korean: '시간이 없어요.',
      chinese: {
        hanzi: ['没有', '时间'],
        pinyin: ['méiyǒu', 'shíjiān'],
      },
    },
    {
      id: 'sentence29',
      level: 6,
      isFinal: false,
      korean: '전화할 시간이 없어요.',
      chinese: {
        hanzi: ['没有', '时间', '打', '电话'],
        pinyin: ['méiyǒu', 'shíjiān', 'dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence29',
      level: 7,
      isFinal: false,
      korean: '아직 전화할 시간이 없어요.',
      chinese: {
        hanzi: ['还', '没有', '时间', '打', '电话'],
        pinyin: ['hái', 'méiyǒu', 'shíjiān', 'dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence29',
      level: 8,
      isFinal: false,
      korean: '단지 아직 전화할 시간이 없을 뿐이에요.',
      chinese: {
        hanzi: ['只是', '还', '没有', '时间', '打', '电话'],
        pinyin: ['zhǐshì', 'hái', 'méiyǒu', 'shíjiān', 'dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence29',
      level: 9,
      isFinal: false,
      korean: '그는 단지 아직 전화할 시간이 없을 뿐이에요.',
      chinese: {
        hanzi: ['他', '只是', '还没有', '时间', '打', '电话'],
        pinyin: ['tā', 'zhǐshì', 'hái', 'méiyǒu', 'shíjiān', 'dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence29',
      level: 10,
      isFinal: true,
      korean:
        'A: 그는 잊지 않았을 거예요. 그는 단지 아직 전화할 시간이 없을 뿐이에요.',
      chinese: {
        hanzi: [
          '他',
          '不会',
          '忘记',
          '的',
          '他',
          '只是',
          '还没有',
          '时间',
          '打',
          '电话',
        ],
        pinyin: [
          'tā',
          'bú huì',
          'wàngjì',
          'de',
          'tā',
          'zhǐshì',
          'hái',
          'méiyǒu',
          'shíjiān',
          'dǎ',
          'diànhuà',
        ],
      },
    },
    {
      id: 'sentence29',
      level: 11,
      isFinal: false,
      korean: '그럼 저는 조금만(좀) 기다릴게요.',
      chinese: {
        hanzi: ['我', '等等'],
        pinyin: ['wǒ', 'děngdeng'],
      },
    },
    {
      id: 'sentence29',
      level: 12,
      isFinal: false,
      korean: '저는 조금만(좀) 기다려볼게요.',
      chinese: {
        hanzi: ['我', '等等', '吧'],
        pinyin: ['wǒ', 'děngdeng', 'ba'],
      },
    },
    {
      id: 'sentence29',
      level: 13,
      isFinal: false,
      korean: '저는 조금만(좀) 더 기다려볼게요.',
      chinese: {
        hanzi: ['我', '再等等', '吧'],
        pinyin: ['wǒ', 'zài', 'děngdeng', 'ba'],
      },
    },
    {
      id: 'sentence29',
      level: 14,
      isFinal: true,
      korean: 'B: 그럼 저는 조금만(좀) 더 기다려볼게요.',
      chinese: {
        hanzi: ['那', '我', '再等等', '吧'],
        pinyin: ['nà', 'wǒ', 'zài', 'děngdeng', 'ba'],
      },
    },
    // 30번
    {
      id: 'sentence30',
      level: 1,
      isFinal: false,
      korean: '한국어를 알아들어요.',
      chinese: {
        hanzi: ['听懂', '韩语'],
        pinyin: ['tīngdǒng', 'hányǔ'],
      },
    },
    {
      id: 'sentence30',
      level: 2,
      isFinal: false,
      korean: '한국어를 알아들을 수 있어요.',
      chinese: {
        hanzi: ['能', '听懂', '韩语'],
        pinyin: ['néng', 'tīngdǒng', 'hányǔ'],
      },
    },
    {
      id: 'sentence30',
      level: 3,
      isFinal: false,
      korean: '그녀는 한국어를 알아들을 수 있어요.',
      chinese: {
        hanzi: ['她', '能', '听懂', '韩语'],
        pinyin: ['tā', 'néng', 'tīngdǒng', 'hányǔ'],
      },
    },
    {
      id: 'sentence30',
      level: 4,
      isFinal: false,
      korean: '말할 줄 알아요.',
      chinese: {
        hanzi: ['会说'],
        pinyin: ['huì shuō'],
      },
    },
    {
      id: 'sentence30',
      level: 5,
      isFinal: false,
      korean: '말할 줄 몰라요.',
      chinese: {
        hanzi: ['不会', '说'],
        pinyin: ['bú huì', 'shuō'],
      },
    },
    {
      id: 'sentence30',
      level: 6,
      isFinal: false,
      korean: '……, 하지만 말할 줄 몰라요.',
      chinese: {
        hanzi: ['……,但是', '不会', '说'],
        pinyin: ['dànshì', 'bú huì', 'shuō'],
      },
    },
    {
      id: 'sentence30',
      level: 7,
      isFinal: true,
      korean: 'A: 그녀는 한국어를 알아들을 수 있지만 말할 줄 몰라요.',
      chinese: {
        hanzi: ['她', '能', '听懂', '韩语', '但是', '不会', '说'],
        pinyin: ['tā', 'néng', 'tīngdǒng', 'hányǔ', 'dànshì', 'bú huì', 'shuō'],
      },
    },
    {
      id: 'sentence30',
      level: 8,
      isFinal: false,
      korean: '알아듣기만 해도(알아들을 수만 있어도) …… .',
      chinese: {
        hanzi: ['听得懂就'],
        pinyin: ['tīng de dǒng jiù'],
      },
    },
    {
      id: 'sentence30',
      level: 9,
      isFinal: false,
      korean: '정말 대단해요.',
      chinese: {
        hanzi: ['很', '厉害'],
        pinyin: ['hěn', 'lìhai'],
      },
    },
    {
      id: 'sentence30',
      level: 10,
      isFinal: false,
      korean: '이미 정말 대단해요.',
      chinese: {
        hanzi: ['已经', '很', '厉害', '了'],
        pinyin: ['yǐjing', 'hěn', 'lìhai', 'le'],
      },
    },
    {
      id: 'sentence30',
      level: 11,
      isFinal: true,
      korean: 'B: 알아듣기만 해도 이미 정말 대단해요.',
      chinese: {
        hanzi: ['听', '得', '懂', '就', '已经', '很', '厉害', '了'],
        pinyin: ['tīng', 'de', 'dǒng', 'jiù', 'yǐjing', 'hěn', 'lìhai', 'le'],
      },
    },
  ],

  day4: [
    // 31번
    {
      id: 'sentence31',
      level: 1,
      isFinal: false,
      korean: '들어갈 수 있어요.',
      chinese: {
        hanzi: ['能', '进'],
        pinyin: ['néng', 'jìn'],
      },
    },
    {
      id: 'sentence31',
      level: 2,
      isFinal: false,
      korean: '그래야 들어갈 수 있어요.',
      chinese: {
        hanzi: ['才', '能', '进'],
        pinyin: ['cái', 'néng', 'jìn'],
      },
    },
    {
      id: 'sentence31',
      level: 3,
      isFinal: false,
      korean: '신분증이 있어요.',
      chinese: {
        hanzi: ['有', '身份证'],
        pinyin: ['yǒu', 'shēnfènzhèng'],
      },
    },
    {
      id: 'sentence31',
      level: 4,
      isFinal: false,
      korean: '신분증이 있어야 들어갈 수 있어요.',
      chinese: {
        hanzi: ['有', '身份证', '才', '能', '进'],
        pinyin: ['yǒu', 'shēnfènzhèng', 'cái', 'néng', 'jìn'],
      },
    },
    {
      id: 'sentence31',
      level: 5,
      isFinal: false,
      korean: '신분증이 있어야만 들어갈 수 있어요.',
      chinese: {
        hanzi: ['要', '有', '身份证', '才能', '进'],
        pinyin: ['Yào', 'yǒu', 'shēnfènzhèng', 'cái', 'néng', 'jìn'],
      },
    },
    {
      id: 'sentence31',
      level: 6,
      isFinal: true,
      korean: 'A: 이 아파트 단지는 신분증이 있어야만 들어갈 수 있어요.',
      chinese: {
        hanzi: ['这个', '小区', '要', '有', '身份证', '才能', '进'],
        pinyin: [
          'zhè ge',
          'xiǎoqū',
          'yào',
          'yǒu',
          'shēnfènzhèng',
          'cái',
          'néng',
          'jìn',
        ],
      },
    },
    {
      id: 'sentence31',
      level: 7,
      isFinal: false,
      korean: ['두고 왔어요.'],
      chinese: {
        hanzi: ['忘带', '了'],
        pinyin: ['wàng dài', 'le'],
      },
    },
    {
      id: 'sentence31',
      level: 8,
      isFinal: false,
      korean: '신분증을 두고 왔어요.',
      chinese: {
        hanzi: ['忘带', '身份证', '了'],
        pinyin: ['wàng dài', 'shēnfènzhèng', 'le'],
      },
    },
    {
      id: 'sentence31',
      level: 9,
      isFinal: true,
      korean: 'A: 저는 신분증을 두고 왔어요.',
      chinese: {
        hanzi: ['我', '忘带', '身份证', '了'],
        pinyin: ['wǒ', 'wàng dài', 'shēnfènzhèng', 'le'],
      },
    },
    {
      id: 'sentence31',
      level: 10,
      isFinal: false,
      korean: '어떻게 하죠?',
      chinese: {
        hanzi: ['怎么办'],
        pinyin: ['zhènmebàn'],
      },
    },
    {
      id: 'sentence31',
      level: 11,
      isFinal: false,
      korean: '그럼 어떻게 하죠?',
      chinese: {
        hanzi: ['那', '怎么办'],
        pinyin: ['nà', 'zhènmebàn'],
      },
    },
    {
      id: 'sentence31',
      level: 12,
      isFinal: true,
      korean: 'B: 저는 신분증을 두고 왔는데, 그럼 어떻게 하죠?',
      chinese: {
        hanzi: ['我', '忘带', '身份证', '了', '那', '怎么办'],
        pinyin: ['wǒ', 'wàng dài', 'shēnfènzhèng', 'le', 'nà', 'zhènmebàn'],
      },
    },
    // 32번
    {
      id: 'sentence32',
      level: 1,
      isFinal: false,
      korean: '수업해요.',
      chinese: {
        hanzi: ['上课'],
        pinyin: ['shàng kè'],
      },
    },
    {
      id: 'sentence32',
      level: 2,
      isFinal: false,
      korean: '수업에 와요.',
      chinese: {
        hanzi: ['来', '上课'],
        pinyin: ['lái', 'shàng kè'],
      },
    },
    {
      id: 'sentence32',
      level: 3,
      isFinal: false,
      korean: '수업에 올 수 있어요.',
      chinese: {
        hanzi: ['能', '来', '上课'],
        pinyin: ['néng', 'lái', 'shàng kè'],
      },
    },
    {
      id: 'sentence32',
      level: 4,
      isFinal: false,
      korean: '수업에 올 수 없어요(못 와요).',
      chinese: {
        hanzi: ['不能', '来', '上课'],
        pinyin: ['bù néng', 'lái', 'shàng kè'],
      },
    },
    {
      id: 'sentence32',
      level: 5,
      isFinal: false,
      korean: '아파요.',
      chinese: {
        hanzi: ['生病'],
        pinyin: ['shēng bìng'],
      },
    },
    {
      id: 'sentence32',
      level: 6,
      isFinal: false,
      korean: '아파요(아픈 상태가 됐어요).',
      chinese: {
        hanzi: ['生病', '了'],
        pinyin: ['shēng bìng', 'le'],
      },
    },
    {
      id: 'sentence32',
      level: 7,
      isFinal: false,
      korean: '오늘 아파요.',
      chinese: {
        hanzi: ['今天', '生病', '了'],
        pinyin: ['jīntiān', 'shēng bìng', 'le'],
      },
    },
    {
      id: 'sentence32',
      level: 8,
      isFinal: false,
      korean: '그는 오늘 아파요.',
      chinese: {
        hanzi: ['他', '今天', '生病', '了'],
        pinyin: ['tā', 'jīntiān', 'shēng bìng', 'le'],
      },
    },
    {
      id: 'sentence32',
      level: 9,
      isFinal: true,
      korean: 'A: 그는 오늘 아파서 수업에 올 수 없어요(못 와요).',
      chinese: {
        hanzi: ['他', '今天', '生病', '了', '不能', '来', '上课'],
        pinyin: [
          'tā',
          'jīntiān',
          'shēng bìng',
          'le',
          'bù néng',
          'lái',
          'shàng kè',
        ],
      },
    },
    {
      id: 'sentence32',
      level: 10,
      isFinal: false,
      korean: '그를 봐요.',
      chinese: {
        hanzi: ['看', '他'],
        pinyin: ['kàn', 'tā'],
      },
    },
    {
      id: 'sentence32',
      level: 11,
      isFinal: false,
      korean: '그를 한번 봐요.',
      chinese: {
        hanzi: ['看看', '他'],
        pinyin: ['kànkan', 'tā'],
      },
    },
    {
      id: 'sentence32',
      level: 12,
      isFinal: false,
      korean: '그를 한번 보러 가요.',
      chinese: {
        hanzi: ['去', '看看', '他'],
        pinyin: ['qù', 'kànkan', 'tā'],
      },
    },
    {
      id: 'sentence32',
      level: 13,
      isFinal: true,
      korean: 'B: 그를 한번 보러 갈까요?.',
      chinese: {
        hanzi: ['要', '不要', '去', '看看', '他'],
        pinyin: ['yào', 'bù yào', 'qù', 'kànkan', 'tā'],
      },
    },
    // 33번
    {
      id: 'sentence33',
      level: 1,
      isFinal: false,
      korean: '휴대폰을 해요.',
      chinese: {
        hanzi: ['玩'(儿), '手机'],
        pinyin: ['wán(r)', 'shǒujī'],
      },
    },
    {
      id: 'sentence33',
      level: 2,
      isFinal: false,
      korean: '휴대폰 하면 안 돼요.',
      chinese: {
        hanzi: ['不能', '玩(儿)', '手机'],
        pinyin: ['bù néng', 'wán(r)', 'shǒujī'],
      },
    },
    {
      id: 'sentence33',
      level: 3,
      isFinal: false,
      korean: '자기 전에.....',
      chinese: {
        hanzi: ['睡觉前'],
        pinyin: ['shuì jiào qián'],
      },
    },
    {
      id: 'sentence33',
      level: 4,
      isFinal: false,
      korean: '자기 전에 휴대폰 하면 안 돼요.',
      chinese: {
        hanzi: ['睡', '觉', '前', '不能', '玩(儿)', '手机'],
        pinyin: ['shuì', 'jiào', 'qián', 'bù néng', 'wán(r)', 'shǒujī'],
      },
    },
    {
      id: 'sentence33',
      level: 5,
      isFinal: false,
      korean: '안 좋아요.',
      chinese: {
        hanzi: ['不好'],
        pinyin: ['bù hǎo'],
      },
    },
    {
      id: 'sentence33',
      level: 6,
      isFinal: false,
      korean: '눈에 안 좋아요.',
      chinese: {
        hanzi: ['对', '眼睛', '不好'],
        pinyin: ['duì', 'yǎnjīng', 'bù hǎo'],
      },
    },
    {
      id: 'sentence33',
      level: 7,
      isFinal: true,
      korean: 'A: 자기 전에 휴대폰 하면 안 돼요, 눈에 안 좋아요.',
      chinese: {
        hanzi: [
          '睡',
          '觉',
          '前',
          '不能',
          '玩(儿)',
          '手机',
          '对',
          '眼睛',
          '不好',
        ],
        pinyin: [
          'shuì',
          'jiào',
          'qián',
          'bù néng',
          'wán(r)',
          'shǒujī',
          'duì',
          'yǎnjīng',
          'bù hǎo',
        ],
      },
    },
    {
      id: 'sentence33',
      level: 8,
      isFinal: false,
      korean: '졸려요.',
      chinese: {
        hanzi: ['困'],
        pinyin: ['kùn'],
      },
    },
    {
      id: 'sentence33',
      level: 9,
      isFinal: false,
      korean: '안 졸려요.',
      chinese: {
        hanzi: ['不', '困'],
        pinyin: ['bù', 'kùn'],
      },
    },
    {
      id: 'sentence33',
      level: 10,
      isFinal: false,
      korean: '아직 안 졸려요~',
      chinese: {
        hanzi: ['还', '不', '困', '呢'],
        pinyin: ['hái', 'bù', 'kùn', 'ne'],
      },
    },
    {
      id: 'sentence33',
      level: 11,
      isFinal: false,
      korean: '저 아직 안 졸려요~',
      chinese: {
        hanzi: ['我', '还', '不', '困', '呢'],
        pinyin: ['wǒ', 'hái', 'bù', 'kùn', 'ne'],
      },
    },
    {
      id: 'sentence33',
      level: 12,
      isFinal: true,
      korean: 'B: 근데 저 아직 안 졸려요~',
      chinese: {
        hanzi: ['可', '我', '还', '不', '困', '呢'],
        pinyin: ['kě', 'wǒ', 'hái', 'bù', 'kùn', 'ne'],
      },
    },
    // 34번
    {
      id: 'sentence34',
      level: 1,
      isFinal: false,
      korean: '해내다.',
      chinese: {
        hanzi: ['做到'],
        pinyin: ['zuò dào'],
      },
    },
    {
      id: 'sentence34',
      level: 2,
      isFinal: false,
      korean: '충분히 해낼 수 있다.',
      chinese: {
        hanzi: ['能够', '做到'],
        pinyin: ['nénggòu', 'zuò dào'],
      },
    },
    {
      id: 'sentence34',
      level: 3,
      isFinal: false,
      korean: '……하면, 충분히 해낼 수 있다.',
      chinese: {
        hanzi: ['……，就', '能够', '做到'],
        pinyin: ['jiù', 'nénggòu', 'zuò dào'],
      },
    },
    {
      id: 'sentence34',
      level: 4,
      isFinal: false,
      korean: '노력하다.',
      chinese: {
        hanzi: ['努力'],
        pinyin: ['nǔlì'],
      },
    },
    {
      id: 'sentence34',
      level: 5,
      isFinal: false,
      korean: '노력한다면, …… .',
      chinese: {
        hanzi: ['努力的话'],
        pinyin: ['nǔlì de huà'],
      },
    },
    {
      id: 'sentence34',
      level: 6,
      isFinal: false,
      korean: '너가 노력한다면, …… .',
      chinese: {
        hanzi: ['你', '努力', '的', '话'],
        pinyin: ['nǐ', 'nǔlì', 'de', 'huà'],
      },
    },
    {
      id: 'sentence34',
      level: 7,
      isFinal: true,
      korean: 'B: 너가 노력한다면, 충분히 해낼 수 있어.',
      chinese: {
        hanzi: ['你', '努力', '的', '话', '就', '能够', '做到'],
        pinyin: ['nǐ', 'nǔlì', 'de', 'huà', 'jiù', 'nénggòu', 'zuò dào'],
      },
    },
    {
      id: 'sentence34',
      level: 8,
      isFinal: false,
      korean: '힘들다.',
      chinese: {
        hanzi: ['很累'],
        pinyin: ['hěn lèi'],
      },
    },
    {
      id: 'sentence34',
      level: 9,
      isFinal: false,
      korean: '진짜 너무 힘들어 .',
      chinese: {
        hanzi: ['真的', '很', '累'],
        pinyin: ['zhēnde', 'hěn', 'lèi'],
      },
    },
    {
      id: 'sentence34',
      level: 10,
      isFinal: false,
      korean: '가끔 진짜 너무 힘들어.',
      chinese: {
        hanzi: ['有时候', '真的', '很', '累'],
        pinyin: ['yǒushíhou', 'zhēnde', 'hěn', 'lèi'],
      },
    },
    {
      id: 'sentence34',
      level: 11,
      isFinal: false,
      korean: '하지만 가끔 진짜 너무 힘들어.',
      chinese: {
        hanzi: ['可是', '有时候', '真的很', '累'],
        pinyin: ['kěshì', 'yǒushíhou', 'zhēnde', 'hěn', 'lèi'],
      },
    },
    {
      id: 'sentence34',
      level: 12,
      isFinal: false,
      korean: '나 알아, …… .',
      chinese: {
        hanzi: ['我知道'],
        pinyin: ['wǒ zhīdao'],
      },
    },
    {
      id: 'sentence34',
      level: 13,
      isFinal: true,
      korean: 'B: 나 알아(나도 알아), 하지만 가끔 진짜 너무 힘들어.',
      chinese: {
        hanzi: ['我', '知道', '可是', '有时候', '真的', '很', '累'],
        pinyin: ['wǒ', 'zhīdao', 'kěshì', 'yǒushíhou', 'zhēnde', 'hěn', 'lèi'],
      },
    },
    // 35번
    {
      id: 'sentence35',
      level: 1,
      isFinal: false,
      korean: '여기에 앉아요',
      chinese: {
        hanzi: ['坐', '这儿'],
        pinyin: ['zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence35',
      level: 2,
      isFinal: false,
      korean: '여기에 앉아도 돼요.',
      chinese: {
        hanzi: ['可以', '坐', '这儿'],
        pinyin: ['kěyǐ', 'zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence35',
      level: 3,
      isFinal: false,
      korean: '당신은 여기에 앉아도 돼요.',
      chinese: {
        hanzi: ['你', '可以', '坐', '这儿'],
        pinyin: ['nǐ', 'kěyǐ', 'zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence35',
      level: 4,
      isFinal: false,
      korean: '자리(사람) 없어요.',
      chinese: {
        hanzi: ['没有', '人'],
        pinyin: ['méiyǒu', 'rén'],
      },
    },
    {
      id: 'sentence35',
      level: 5,
      isFinal: false,
      korean: '여기에 자리(사람) 없어요.',
      chinese: {
        hanzi: ['这儿', '没有', '人'],
        pinyin: ['zhèr', 'méiyǒu', 'rén'],
      },
    },
    {
      id: 'sentence35',
      level: 6,
      isFinal: true,
      korean: 'A: 당신은 여기에 앉아도 돼요. 여기에 사람 없어요(빈자리예요).',
      chinese: {
        hanzi: ['你', '可以', '坐', '这儿', '这儿', '没有', '人'],
        pinyin: ['nǐ', 'kěyǐ', 'zuò', 'zhèr', 'zhèr', 'méiyǒu', 'rén'],
      },
    },
    {
      id: 'sentence35',
      level: 7,
      isFinal: false,
      korean: '여기에 앉아요.',
      chinese: {
        hanzi: ['坐', '这儿'],
        pinyin: ['zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence35',
      level: 8,
      isFinal: false,
      korean: '저는 여기에 앉을게요.',
      chinese: {
        hanzi: ['我', '坐', '这儿'],
        pinyin: ['wǒ', 'zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence35',
      level: 9,
      isFinal: false,
      korean: '그럼 저는 여기에 앉을게요.',
      chinese: {
        hanzi: ['那', '我', '坐', '这儿'],
        pinyin: ['nà', 'wǒ', 'zuò', 'zhèr'],
      },
    },
    {
      id: 'sentence35',
      level: 10,
      isFinal: false,
      korean: '[친근하고 자연스러운 어투] 그럼 저는 여기에 앉을게요.',
      chinese: {
        hanzi: ['那', '我', '坐', '这儿', '啦'],
        pinyin: ['nà', 'wǒ', 'zuò', 'zhèr', 'la'],
      },
    },
    {
      id: 'sentence35',
      level: 11,
      isFinal: true,
      korean: 'B: 감사해요, 그럼 저는 여기에 앉을게요.',
      chinese: {
        hanzi: ['谢谢', '那', '我', '坐', '这儿', '啦'],
        pinyin: ['xièxie', 'nà', 'wǒ', 'zuò', 'zhèr', 'la'],
      },
    },
    // 36번
    {
      id: 'sentence36',
      level: 1,
      isFinal: false,
      korean: '담배를 피워요',
      chinese: {
        hanzi: ['抽烟'],
        pinyin: ['chōu yān'],
      },
    },
    {
      id: 'sentence36',
      level: 2,
      isFinal: false,
      korean: '담배를 피워도 돼요',
      chinese: {
        hanzi: ['可以', '抽烟'],
        pinyin: ['kěyǐ', 'chōu yān'],
      },
    },
    {
      id: 'sentence36',
      level: 3,
      isFinal: false,
      korean: '담배를 피우면 안 돼요',
      chinese: {
        hanzi: ['不可以', '抽烟'],
        pinyin: ['bù kěyǐ', 'chōu yān'],
      },
    },
    {
      id: 'sentence36',
      level: 4,
      isFinal: false,
      korean: '여기서는 담배를 피우면 안 돼요',
      chinese: {
        hanzi: ['这里', '不可以', '抽烟'],
        pinyin: ['zhèlǐ', 'bù kěyǐ', 'chōu yān'],
      },
    },
    {
      id: 'sentence36',
      level: 5,
      isFinal: false,
      korean: '흡연 구역이 있어요',
      chinese: {
        hanzi: ['有', '吸烟区'],
        pinyin: ['yǒu', 'xīyānqū'],
      },
    },
    {
      id: 'sentence36',
      level: 6,
      isFinal: false,
      korean: '밖에 흡연 구역이 있어요.',
      chinese: {
        hanzi: ['外面', '有', '吸烟区'],
        pinyin: ['wàimiàn', 'yǒu', 'xīyānqū'],
      },
    },
    {
      id: 'sentence36',
      level: 7,
      isFinal: true,
      korean: 'A: 여기서는 담배를 피우면 안 돼요, 밖에 흡연 구역이 있어요.',
      chinese: {
        hanzi: ['这里', '不可以', '抽烟', '外面', '有', '吸烟区'],
        pinyin: ['zhèlǐ', 'bù kěyǐ', 'chōu yān', 'wàimiàn', 'yǒu', 'xīyānqū'],
      },
    },
    {
      id: 'sentence36',
      level: 8,
      isFinal: false,
      korean: '밖에 흡연 구역이 있군요.',
      chinese: {
        hanzi: ['外面', '有', '吸烟区', '啊'],
        pinyin: ['wàimiàn', 'yǒu', 'xīyānqū', 'a'],
      },
    },
    {
      id: 'sentence36',
      level: 9,
      isFinal: false,
      korean: '(알고보니) 밖에 흡연 구역이 있군요.',
      chinese: {
        hanzi: ['原来', '外面', '有', '吸烟区', '啊'],
        pinyin: ['yuánlái', 'wàimiàn', 'yǒu', 'xīyānqū', 'a'],
      },
    },
    {
      id: 'sentence36',
      level: 10,
      isFinal: true,
      korean: 'B: 아, (알고보니) 밖에 흡연 구역이 있군요.',
      chinese: {
        hanzi: ['哦', '原来', '外面', '有', '吸烟区', '啊'],
        pinyin: ['ó', 'yuánlái', 'wàimiàn', 'yǒu', 'xīyānqū', 'a'],
      },
    },
    // 37번
    {
      id: 'sentence37',
      level: 1,
      isFinal: false,
      korean: '저는 성공해요.',
      chinese: {
        hanzi: ['我', '成功'],
        pinyin: ['wǒ', 'chénggōng'],
      },
    },
    {
      id: 'sentence37',
      level: 2,
      isFinal: false,
      korean: '저는 성공할 거예요.',
      chinese: {
        hanzi: ['我', '要', '成功'],
        pinyin: ['wǒ', 'yào', 'chénggōng'],
      },
    },
    {
      id: 'sentence37',
      level: 3,
      isFinal: false,
      korean: '저는 반드시 성공할 거예요.',
      chinese: {
        hanzi: ['我', '一定要', '成功'],
        pinyin: ['wǒ', 'yídìng', 'yào', 'chénggōng'],
      },
    },
    {
      id: 'sentence37',
      level: 4,
      isFinal: true,
      korean: 'A: 저는 이번에 반드시 성공할 거예요.',
      chinese: {
        hanzi: ['我', '这次', '一定要', '成功'],
        pinyin: ['wǒ', 'zhècì', 'yídìng', 'yào', 'chénggōng'],
      },
    },
    {
      id: 'sentence37',
      level: 5,
      isFinal: false,
      korean: '평생 후회해요.',
      chinese: {
        hanzi: ['后悔', '一辈子'],
        pinyin: ['hòuhuǐ', 'yíbèizi'],
      },
    },
    {
      id: 'sentence37',
      level: 6,
      isFinal: false,
      korean: '평생 후회할 거예요.',
      chinese: {
        hanzi: ['会', '后悔', '一辈子'],
        pinyin: ['huì', 'hòuhuǐ', 'yíbèizi'],
      },
    },
    {
      id: 'sentence37',
      level: 7,
      isFinal: false,
      korean: '안 그러면 평생 후회할 거예요.',
      chinese: {
        hanzi: ['不然', '会', '后悔', '一辈子'],
        pinyin: ['bùrán', 'huì', 'hòuhuǐ', 'yíbèizi'],
      },
    },
    {
      id: 'sentence37',
      level: 8,
      isFinal: false,
      korean: '안 그러면 평생 후회할 거예요.',
      chinese: {
        hanzi: ['不然', '会', '后悔', '一辈子'],
        pinyin: ['bùrán', 'huì', 'hòuhuǐ', 'yíbèizi'],
      },
    },
    {
      id: 'sentence37',
      level: 9,
      isFinal: true,
      korean:
        'A: 저는 이번에 반드시 성공할 거예요, 안 그러면 평생 후회할 거예요.',
      chinese: {
        hanzi: ['我', '这次', '一定要', '成功', '不然', '会', '后悔', '一辈子'],
        pinyin: [
          'wǒ',
          'zhècì',
          'yídìng',
          'yào',
          'chénggōng',
          'bùrán',
          'huì',
          'hòuhuǐ',
          'yíbèizi',
        ],
      },
    },
    {
      id: 'sentence37',
      level: 10,
      isFinal: false,
      korean: '해내요.',
      chinese: {
        hanzi: ['做到'],
        pinyin: ['zuòdào'],
      },
    },
    {
      id: 'sentence37',
      level: 11,
      isFinal: false,
      korean: '해낼 수 있어요.',
      chinese: {
        hanzi: ['能', '做到'],
        pinyin: ['néng', 'zuòdào'],
      },
    },
    {
      id: 'sentence37',
      level: 12,
      isFinal: false,
      korean: '반드시 해낼 수 있어요.',
      chinese: {
        hanzi: ['一定', '能', '做到'],
        pinyin: ['yídìng', 'néng', 'zuòdào'],
      },
    },
    {
      id: 'sentence37',
      level: 13,
      isFinal: false,
      korean: '당신을 믿어요.',
      chinese: {
        hanzi: ['相信', '你'],
        pinyin: ['xiāngxìn', 'nǐ'],
      },
    },
    {
      id: 'sentence37',
      level: 14,
      isFinal: false,
      korean: '저는 당신을 믿어요.',
      chinese: {
        hanzi: ['我', '相信', '你'],
        pinyin: ['wǒ', 'xiāngxìn', 'nǐ'],
      },
    },
    {
      id: 'sentence37',
      level: 15,
      isFinal: false,
      korean: '저는 당신을 믿어요, 반드시 해낼 수 있을 거예요.',
      chinese: {
        hanzi: ['我', '相信', '你', '一定', '能', '做到'],
        pinyin: ['wǒ', 'xiāngxìn', 'nǐ', 'yídìng', 'néng', 'zuòdào'],
      },
    },
    // 38번
    {
      id: 'sentence38',
      level: 1,
      isFinal: false,
      korean: '주의해야 해요.',
      chinese: {
        hanzi: ['要注意'],
        pinyin: ['yào zhùyì'],
      },
    },
    {
      id: 'sentence38',
      level: 2,
      isFinal: false,
      korean: '안전에 주의해야 해요.',
      chinese: {
        hanzi: ['要', '注意', '安全'],
        pinyin: ['yào', 'zhùyì', 'ānquán'],
      },
    },
    {
      id: 'sentence38',
      level: 3,
      isFinal: false,
      korean: '운전할 때는 안전에 주의해야 해요.',
      chinese: {
        hanzi: ['开车', '要', '注意', '安全'],
        pinyin: ['kāi chē', 'yào', 'zhùyì', 'ānquán'],
      },
    },
    {
      id: 'sentence38',
      level: 4,
      isFinal: false,
      korean: '전화를 해요.',
      chinese: {
        hanzi: ['打', '电话'],
        pinyin: ['dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence38',
      level: 5,
      isFinal: false,
      korean: '저에게 전화해요.',
      chinese: {
        hanzi: ['给', '我', '打', '电话'],
        pinyin: ['gěi', 'wǒ', 'dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence38',
      level: 6,
      isFinal: false,
      korean: '도착하면 저에게 전화해요.',
      chinese: {
        hanzi: ['到', '了', '给', '我', '打', '电话'],
        pinyin: ['dào', 'le', 'gěi', 'wǒ', 'dǎ', 'diànhuà'],
      },
    },
    {
      id: 'sentence38',
      level: 7,
      isFinal: true,
      korean: 'A: 운전할 때는 안전에 주의하고, 도착하면 저에게 전화해요.',
      chinese: {
        hanzi: [
          '开车',
          '要',
          '注意',
          '安全',
          '到',
          '了',
          '给',
          '我',
          '打',
          '电话',
        ],
        pinyin: [
          'kāi chē',
          'yào',
          'zhùyì',
          'ānquán',
          'dào',
          'le',
          'gěi',
          'wǒ',
          'dǎ',
          'diànhuà',
        ],
      },
    },
    {
      id: 'sentence38',
      level: 8,
      isFinal: false,
      korean: '걱정하지 마요(마음 놓아요).',
      chinese: {
        hanzi: ['放心'],
        pinyin: ['fàng xīn'],
      },
    },
    {
      id: 'sentence38',
      level: 9,
      isFinal: false,
      korean:
        '[조금 더 부드럽고 안심시키는 말투] 걱정하지 마세요(마음 놓으세요)~',
      chinese: {
        hanzi: ['放心', '吧'],
        pinyin: ['fàng xīn', 'ba'],
      },
    },
    {
      id: 'sentence38',
      level: 10,
      isFinal: true,
      korean: '알겠어요, 걱정하지 마세요(마음 놓으세요)~',
      chinese: {
        hanzi: ['好的', '放心', '吧'],
        pinyin: ['hǎo de', 'fàng xīn', 'ba'],
      },
    },
    // 39번
    {
      id: 'sentence39',
      level: 1,
      isFinal: false,
      korean: '쉬어요.',
      chinese: {
        hanzi: ['休息'],
        pinyin: ['xiūxi'],
      },
    },
    {
      id: 'sentence39',
      level: 2,
      isFinal: false,
      korean: '좀 쉬어요.',
      chinese: {
        hanzi: ['休息', '一下'],
        pinyin: ['xiūxi', 'yīxià'],
      },
    },
    {
      id: 'sentence39',
      level: 3,
      isFinal: false,
      korean: '좀 쉬고 싶어요.',
      chinese: {
        hanzi: ['想', '休息', '一下'],
        pinyin: ['xiǎng', 'xiūxi', 'yīxià'],
      },
    },
    {
      id: 'sentence39',
      level: 4,
      isFinal: false,
      korean: '저는 좀 쉬고 싶어요.',
      chinese: {
        hanzi: ['我', '想', '休息', '一下'],
        pinyin: ['wǒ', 'xiǎng', 'xiūxi', 'yīxià'],
      },
    },
    {
      id: 'sentence39',
      level: 5,
      isFinal: false,
      korean: '다시 얘기해요.',
      chinese: {
        hanzi: ['再', '聊'],
        pinyin: ['zài', 'liáo'],
      },
    },
    {
      id: 'sentence39',
      level: 6,
      isFinal: false,
      korean: '이따가 다시 얘기해요.',
      chinese: {
        hanzi: ['等会儿', '再', '聊'],
        pinyin: ['děnghuìr', 'zài', 'liáo'],
      },
    },
    {
      id: 'sentence39',
      level: 7,
      isFinal: true,
      korean: 'A: 저는 좀 쉬고 싶어요, 이따가 다시 얘기해요.',
      chinese: {
        hanzi: ['我', '想', '休息', '一下', '等会儿', '再', '聊'],
        pinyin: ['wǒ', 'xiǎng', 'xiūxi', 'yīxià', 'děnghuìr', 'zài', 'liáo'],
      },
    },
    {
      id: 'sentence39',
      level: 8,
      isFinal: false,
      korean: '먼저 쉬어요.',
      chinese: {
        hanzi: ['先', '休息'],
        pinyin: ['xiān', 'xiūxi'],
      },
    },
    {
      id: 'sentence39',
      level: 9,
      isFinal: false,
      korean: '(조금 더 부드러운 말투) 먼저 쉬세요.',
      chinese: {
        hanzi: ['先', '休息', '吧'],
        pinyin: ['xiān', 'xiūxi', 'ba'],
      },
    },
    {
      id: 'sentence39',
      level: 10,
      isFinal: false,
      korean: '당신 먼저 쉬세요.',
      chinese: {
        hanzi: ['你', '先', '休息', '吧'],
        pinyin: ['nǐ', 'xiān', 'xiūxi', 'ba'],
      },
    },
    {
      id: 'sentence39',
      level: 11,
      isFinal: true,
      korean: 'B: 알겠어요, 당신 먼저 쉬세요.',
      chinese: {
        hanzi: ['好的', '你', '先', '休息', '吧'],
        pinyin: ['hǎo de', 'nǐ', 'xiān', 'xiūxi', 'ba'],
      },
    },
    // 40번
    {
      id: 'sentence40',
      level: 1,
      isFinal: false,
      korean: '(밖에) 나가요.',
      chinese: {
        hanzi: ['出门'],
        pinyin: ['chū mén'],
      },
    },
    {
      id: 'sentence40',
      level: 2,
      isFinal: false,
      korean: '(밖에) 나가고 싶어요.',
      chinese: {
        hanzi: ['想', '出门'],
        pinyin: ['xiǎng', 'chū mén'],
      },
    },
    {
      id: 'sentence40',
      level: 3,
      isFinal: false,
      korean: '(밖에) 나가고 싶지 않아요.',
      chinese: {
        hanzi: ['不', '想', '出门'],
        pinyin: ['bù', 'xiǎng', 'chū mén'],
      },
    },
    {
      id: 'sentence40',
      level: 4,
      isFinal: false,
      korean: '오늘은 (밖에) 나가고 싶지 않아요.',
      chinese: {
        hanzi: ['今天', '不', '想', '出门'],
        pinyin: ['jīntiān', 'bù', 'xiǎng', 'chū mén'],
      },
    },
    {
      id: 'sentence40',
      level: 5,
      isFinal: false,
      korean: '저는 오늘 (밖에) 나가고 싶지 않아요.',
      chinese: {
        hanzi: ['我', '今天', '不', '想', '出门'],
        pinyin: ['wǒ', 'jīntiān', 'bù', 'xiǎng', 'chū mén'],
      },
    },
    {
      id: 'sentence40',
      level: 6,
      isFinal: false,
      korean: '하고 싶어요.',
      chinese: {
        hanzi: ['想', '做'],
        pinyin: ['xiǎng', 'zuò'],
      },
    },
    {
      id: 'sentence40',
      level: 7,
      isFinal: false,
      korean: '하고 싶지 않아요.',
      chinese: {
        hanzi: ['不', '想', '做'],
        pinyin: ['bù', 'xiǎng', 'zuò'],
      },
    },
    {
      id: 'sentence40',
      level: 8,
      isFinal: false,
      korean: '아무것도 ......',
      chinese: {
        hanzi: ['什么也'],
        pinyin: ['shénme yě'],
      },
    },
    {
      id: 'sentence40',
      level: 9,
      isFinal: false,
      korean: '아무것도 ...하지 않아요.',
      chinese: {
        hanzi: ['什么也', '不'],
        pinyin: ['shénme yě', 'bù'],
      },
    },
    {
      id: 'sentence40',
      level: 10,
      isFinal: false,
      korean: '아무것도 하고 싶지 않아요.',
      chinese: {
        hanzi: ['什么也', '不', '想', '做'],
        pinyin: ['shénme yě', 'bù', 'xiǎng', 'zuò'],
      },
    },
    {
      id: 'sentence40',
      level: 11,
      isFinal: true,
      korean: 'A: 저는 오늘 나가고 싶지 않고, 아무것도 하고 싶지 않아요.',
      chinese: {
        hanzi: ['我', '今天', '不', '想', '出门', '什么也', '不', '想', '做'],
        pinyin: [
          'wǒ',
          'jīntiān',
          'bù',
          'xiǎng',
          'chū mén',
          'shénme yě',
          'bù',
          'xiǎng',
          'zuò',
        ],
      },
    },
    {
      id: 'sentence40',
      level: 12,
      isFinal: false,
      korean: '푹 쉬어요.',
      chinese: {
        hanzi: ['好好', '休息'],
        pinyin: ['hǎohāo', 'xiūxi'],
      },
    },
    {
      id: 'sentence40',
      level: 13,
      isFinal: false,
      korean: '푹 좀 쉬어요.',
      chinese: {
        hanzi: ['好好', '休息', '一下'],
        pinyin: ['hǎohāo', 'xiūxi', 'yīxià'],
      },
    },
    {
      id: 'sentence40',
      level: 14,
      isFinal: true,
      korean: 'B: 그럼 푹 좀 쉬어요~',
      chinese: {
        hanzi: ['那', '好好', '休息', '一下', '吧'],
        pinyin: ['nà', 'hǎohāo', 'xiūxi', 'yīxià', 'ba'],
      },
    },
  ],
  day5: [
    // 41번
    {
      id: 'sentence41',
      level: 1,
      isFinal: false,
      korean: '…할 수 없다',
      chinese: {
        hanzi: ['...不了'],
        pinyin: ['bu liǎo'],
      },
    },
    {
      id: 'sentence41',
      level: 2,
      isFinal: false,
      korean: '쓸 수 없다(작동할 수 없다)',
      chinese: {
        hanzi: ['用', '不了'],
        pinyin: ['Yòng', 'bu liǎo'],
      },
    },
    {
      id: 'sentence41',
      level: 3,
      isFinal: false,
      korean: '에어컨을 쓸 수 없다',
      chinese: {
        hanzi: ['空调', '用', '不了'],
        pinyin: ['Kōngtiáo', 'yòng', 'bu liǎo'],
      },
    },
    {
      id: 'sentence41',
      level: 4,
      isFinal: false,
      korean:
        '(더이상) 쓸 수 없게 되다(작동할 수 없게 되다) ***이 문장의 "了 le"는 변화(…하게 되다)를 나타내요.',
      chinese: {
        hanzi: ['用', '不了', '了'],
        pinyin: ['Yòng', 'bu liǎo', 'le'],
      },
    },
    {
      id: 'sentence41',
      level: 5,
      isFinal: true,
      korean: '에어컨이 안돼요(에어컨이 쓸 수 없게 되었어요)',
      chinese: {
        hanzi: ['空调', '用', '不了', '了'],
        pinyin: ['Kōngtiáo', 'yòng', 'bu liǎo', 'le'],
      },
    },

    // 42번
    {
      id: 'sentence42',
      level: 1,
      isFinal: false,
      korean: '나를 도와주다',
      chinese: {
        hanzi: ['帮', '我'],
        pinyin: ['Bāng', 'wǒ'],
      },
    },
    {
      id: 'sentence42',
      level: 2,
      isFinal: false,
      korean:
        '나를 도와 한 번(좀) 보다 ***발생순서대로 배열, 덩어리훈련을 위해 직역해서 어색할 수 있어요',
      chinese: {
        hanzi: ['帮', '我', '看看'],
        pinyin: ['Bāng', 'wǒ', 'kànkan'],
      },
    },
    {
      id: 'sentence42',
      level: 3,
      isFinal: false,
      korean:
        '와서 나를 도와 한 번 보다 ***발생순서대로 배열, 덩어리훈련을 위해 직역해서 어색할 수 있어요',
      chinese: {
        hanzi: ['来', '帮', '我', '看看'],
        pinyin: ['Lái', 'bāng', 'wǒ', 'kànkan'],
      },
    },
    {
      id: 'sentence42',
      level: 4,
      isFinal: false,
      korean:
        '어떻게 된 일인지, 무슨 일인지 ***(一)回事 yì huí shì 하나의 일(한 개의 일) ***回 huí 일(事)을 세는 양사 (= 件 jiàn)',
      chinese: {
        hanzi: ['怎么', '回事'],
        pinyin: ['Zěnme', 'huí shì'],
      },
    },
    {
      id: 'sentence42',
      level: 5,
      isFinal: false,
      korean:
        '어떻게 된 일인지 와서 나를 도와 한 번 보다 ***발생순서대로 배열, 덩어리훈련을 위해 직역해서 어색할 수 있어요',
      chinese: {
        hanzi: ['来', '帮', '我', '看看', '怎么', '回事'],
        pinyin: ['Lái', 'bāng', 'wǒ', 'kànkan', 'zěnme', 'huí shì'],
      },
    },
    {
      id: 'sentence42',
      level: 6,
      isFinal: false,
      korean: '…할 수 있을까요?',
      chinese: {
        hanzi: ['能...吗'],
        pinyin: ['néng ma'],
      },
    },
    {
      id: 'sentence42',
      level: 7,
      isFinal: false,
      korean:
        '어떻게 된 일인지 봐주실 수 있을까요? ***발생순서대로 배열, 덩어리훈련을 위해 직역해서 어색할 수 있어요',
      chinese: {
        hanzi: ['能', '来', '帮', '我', '看看', '怎么', '回事', '吗？'],
        pinyin: [
          'Néng',
          'lái',
          'bāng',
          'wǒ',
          'kànkan',
          'zěnme',
          'huí shì',
          'ma',
        ],
      },
    },
    {
      id: 'sentence42',
      level: 8,
      isFinal: true,
      korean:
        '에어컨이 안돼요. 어떻게 된 일인지 봐주실 수 있을까요? ***의역이니 집중해서 "발생 순서"대로  배열하기!',
      chinese: {
        hanzi: [
          '空调',
          '用',
          '不了',
          '了,',
          '能',
          '来',
          '帮',
          '我',
          '看看',
          '怎么',
          '回事',
          '吗?',
        ],
        pinyin: [
          'Kōngtiáo',
          'yòng',
          'bu liǎo',
          'le',
          'néng',
          'lái',
          'bāng',
          'wǒ',
          'kànkan',
          'zěnme',
          'huí shì',
          'ma',
        ],
      },
    },

    // 43번
    {
      id: 'sentence43',
      level: 1,
      isFinal: false,
      korean: '리모컨',
      chinese: {
        hanzi: ['遥控器'],
        pinyin: ['Yáokòngqì'],
      },
    },
    {
      id: 'sentence43',
      level: 2,
      isFinal: false,
      korean:
        '배터리가 없다 ***이 문장의 "了 le"는 변화(…하게 되다)를 나타내요',
      chinese: {
        hanzi: ['没', '电', '了'],
        pinyin: ['Méi', 'diàn', 'le'],
      },
    },
    {
      id: 'sentence43',
      level: 3,
      isFinal: true,
      korean:
        '리모컨 배터리가 없어요 ***遥控器 yáokòngqì 리모컨 电 diàn 전기 遥控器를 遥控(器)이라고 생략할 수 있어요.',
      chinese: {
        hanzi: ['遥控器', '没', '电', '了'],
        pinyin: ['Yáokòngqì', 'méi', 'diàn', 'le'],
      },
    },

    // 44번
    {
      id: 'sentence44',
      level: 1,
      isFinal: false,
      korean: '새 배터리 ***电池 Diànchí 건전지, 배터리',
      chinese: {
        hanzi: ['新', '电池'],
        pinyin: ['Xīn', 'diànchí'],
      },
    },
    {
      id: 'sentence44',
      level: 2,
      isFinal: false,
      korean: '새 배터리 있어요?',
      chinese: {
        hanzi: ['有', '新', '电池', '吗?'],
        pinyin: ['Yǒu', 'xīn', 'diànchí', 'ma'],
      },
    },
    {
      id: 'sentence44',
      level: 3,
      isFinal: true,
      korean: '리모컨 배터리가 없어요. 새 배터리 있어요?',
      chinese: {
        hanzi: ['遥控器', '没', '电', '了，', '有', '新', '电池', '吗？'],
        pinyin: [
          'Yáokòngqì',
          'méi',
          'diàn',
          'le',
          'yǒu',
          'xīn',
          'diànchí',
          'ma',
        ],
      },
    },

    // 45번
    {
      id: 'sentence45',
      level: 1,
      isFinal: false,
      korean: '인터넷이 안 좋다 ***网 wǎng 인터넷',
      chinese: {
        hanzi: ['网', '不好'],
        pinyin: ['Wǎng', 'bù hǎo'],
      },
    },
    {
      id: 'sentence45',
      level: 2,
      isFinal: false,
      korean: '여기 인터넷은 안 좋다',
      chinese: {
        hanzi: ['这儿', '网', '不好'],
        pinyin: ['Zhèr', 'Wǎng', 'bù hǎo'],
      },
    },
    {
      id: 'sentence45',
      level: 3,
      isFinal: true,
      korean: '여기 인터넷은 안 좋나요?',
      chinese: {
        hanzi: ['这儿', '网', '不好', '吗？'],
        pinyin: ['Zhèr', 'Wǎng', 'bù hǎo', 'ma'],
      },
    },

    // 46번
    {
      id: 'sentence46',
      level: 1,
      isFinal: false,
      korean: '원래(부터) ***本来 běnlái 원래 就 jiù 바로',
      chinese: {
        hanzi: ['本来就'],
        pinyin: ['Běnlái jiù'],
      },
    },
    {
      id: 'sentence46',
      level: 2,
      isFinal: false,
      korean: '원래 안 좋다',
      chinese: {
        hanzi: ['本来就', '不好'],
        pinyin: ['Běnlái jiù', 'bù hǎo'],
      },
    },
    {
      id: 'sentence46',
      level: 3,
      isFinal: false,
      korean: '여기 인터넷은 원래 안 좋다',
      chinese: {
        hanzi: ['这儿', '网', '本来就', '不好'],
        pinyin: ['Zhèr', 'Wǎng', 'běnlái jiù', 'bù hǎo'],
      },
    },
    {
      id: 'sentence46',
      level: 4,
      isFinal: true,
      korean: '여기 인터넷은 원래 안 좋나요?',
      chinese: {
        hanzi: ['这儿', '网', '本来就', '不好', '吗？'],
        pinyin: ['Zhèr', 'Wǎng', 'běnlái jiù', 'bù hǎo', 'ma'],
      },
    },

    // 47번
    {
      id: 'sentence47',
      level: 1,
      isFinal: false,
      korean: '빌리다',
      chinese: {
        hanzi: ['借'],
        pinyin: ['Jiè'],
      },
    },
    {
      id: 'sentence47',
      level: 2,
      isFinal: false,
      korean: '보조 충전기를 빌리다',
      chinese: {
        hanzi: ['借', '充电宝'],
        pinyin: ['Jiè', 'chōngdiànbǎo'],
      },
    },
    {
      id: 'sentence47',
      level: 3,
      isFinal: false,
      korean: '좀(한 번) 빌리다',
      chinese: {
        hanzi: ['借', '一下'],
        pinyin: ['Jiè', 'yíxià'],
      },
    },
    {
      id: 'sentence47',
      level: 4,
      isFinal: true,
      korean: '보조 충전기 좀 빌려줘',
      chinese: {
        hanzi: ['借', '一下', '充电宝'],
        pinyin: ['Jiè', 'yíxià', 'chōngdiànbǎo'],
      },
    },
    // 48번
    {
      id: 'sentence48',
      level: 1,
      isFinal: false,
      korean: '…할 수 있을까요?',
      chinese: {
        hanzi: ['能...吗'],
        pinyin: ['néng ma'],
      },
    },
    {
      id: 'sentence48',
      level: 2,
      isFinal: false,
      korean: '너의 보조 충전기',
      chinese: {
        hanzi: ['你', '的', '充电宝'],
        pinyin: ['Nǐ', 'de', 'chōngdiànbǎo'],
      },
    },
    {
      id: 'sentence48',
      level: 3,
      isFinal: false,
      korean: '너의 보조충전기를 좀 빌릴 수 있을까?',
      chinese: {
        hanzi: ['能', '借', '一下', '你', '的', '充电宝', '吗？'],
        pinyin: ['Néng', 'jiè', 'yíxià', 'nǐ', 'de', 'chōngdiànbǎo', 'ma'],
      },
    },
    {
      id: 'sentence48',
      level: 4,
      isFinal: false,
      korean: '꺼지다',
      chinese: {
        hanzi: ['关机'],
        pinyin: ['Guānjī'],
      },
    },
    {
      id: 'sentence48',
      level: 5,
      isFinal: false,
      korean: '꺼졌다',
      chinese: {
        hanzi: ['关机', '了'],
        pinyin: ['Guānjī', 'le'],
      },
    },
    {
      id: 'sentence48',
      level: 6,
      isFinal: false,
      korean: '내 핸드폰',
      chinese: {
        hanzi: ['我', '手机'],
        pinyin: ['Wǒ', 'shǒujī'],
      },
    },
    {
      id: 'sentence48',
      level: 7,
      isFinal: false,
      korean: '내 핸드폰이 꺼졌다',
      chinese: {
        hanzi: ['我', '手机', '关机', '了'],
        pinyin: ['Wǒ', 'shǒujī', 'guānjī', 'le'],
      },
    },
    {
      id: 'sentence48',
      level: 8,
      isFinal: true,
      korean: '내 핸드폰이 꺼졌는데, 보조충전기 좀 빌릴 수 있을까?',
      chinese: {
        hanzi: [
          '我',
          '手机',
          '关机',
          '了,',
          '能',
          '借',
          '一下',
          '你',
          '的',
          '充电宝',
          '吗?',
        ],
        pinyin: [
          'Wǒ',
          'shǒujī',
          'guānjī',
          'le',
          'néng',
          'jiè',
          'yíxià',
          'nǐ',
          'de',
          'chōngdiànbǎo',
          'ma',
        ],
      },
    },

    // 49번
    {
      id: 'sentence49',
      level: 1,
      isFinal: false,
      korean: '기사님',
      chinese: {
        hanzi: ['师傅'],
        pinyin: ['Shīfu'],
      },
    },
    {
      id: 'sentence49',
      level: 2,
      isFinal: false,
      korean: '정차하다, 멈추다',
      chinese: {
        hanzi: ['停'],
        pinyin: ['Tíng'],
      },
    },
    {
      id: 'sentence49',
      level: 3,
      isFinal: false,
      korean: '호텔 입구에 세워주세요 ***酒店 jiǔdiàn 호텔 , 门口 ménkǒu 입구',
      chinese: {
        hanzi: ['停', '酒店', '门口'],
        pinyin: ['Tíng', 'jiǔdiàn', 'ménkǒu'],
      },
    },
    {
      id: 'sentence49',
      level: 4,
      isFinal: false,
      korean:
        '죄송하지만 호텔 앞에서 세워주세요 ***麻烦 máfan 실례지만, 죄송하지만',
      chinese: {
        hanzi: ['麻烦', '停', '酒店', '门口'],
        pinyin: ['Máfan', 'tíng', 'jiǔdiàn', 'ménkǒu'],
      },
    },
    {
      id: 'sentence49',
      level: 5,
      isFinal: true,
      korean:
        '기사님, 호텔 앞에서 세워주세요 ***"停酒店门口就行 tíng jiǔdiàn ménkǒu jiùxíng"라고도 말해요.',
      chinese: {
        hanzi: ['师傅', '麻烦', '停', '酒店', '门口'],
        pinyin: ['Shīfu', 'máfan', 'tíng', 'jiǔdiàn', 'ménkǒu'],
      },
    },

    // 50번
    {
      id: 'sentence50',
      level: 1,
      isFinal: false,
      korean:
        '좀 많다 *** 有点... yǒudiǎn 조금, 좀(불만·불평을 하는 상황) 多 duō 많다',
      chinese: {
        hanzi: ['有点', '多'],
        pinyin: ['Yǒudiǎn', 'duō'],
      },
    },
    {
      id: 'sentence50',
      level: 2,
      isFinal: false,
      korean: '짐이 좀 많아요 ***行李 xíngli 짐',
      chinese: {
        hanzi: ['行李', '有点', '多'],
        pinyin: ['Xíngli', 'yǒudiǎn', 'duō'],
      },
    },
    {
      id: 'sentence50',
      level: 3,
      isFinal: false,
      korean: '제 짐이 좀 많아요',
      chinese: {
        hanzi: ['我', '行李', '有点', '多'],
        pinyin: ['Wǒ', 'xíngli', 'yǒudiǎn', 'duō'],
      },
    },
    {
      id: 'sentence50',
      level: 4,
      isFinal: true,
      korean: '기사님, 호텔 앞에서 세워주세요. 제 짐이 좀 많아서요',
      chinese: {
        hanzi: [
          '师傅,',
          '麻烦',
          '停',
          '酒店',
          '门口,',
          '我',
          '行李',
          '有点',
          '多',
        ],
        pinyin: [
          'Shīfu',
          'máfan',
          'tíng',
          'jiǔdiàn',
          'ménkǒu',
          'wǒ',
          'xíngli',
          'yǒudiǎn',
          'duō',
        ],
      },
    },
  ],

  day6: [
    // 51번
    {
      id: 'sentence51',
      level: 1,
      isFinal: false,
      korean: '기사님',
      chinese: {
        hanzi: ['师傅'],
        pinyin: ['Shīfu'],
      },
    },
    {
      id: 'sentence51',
      level: 2,
      isFinal: false,
      korean: '기사님, 실례지만(죄송하지만) ……(해주세요)',
      chinese: {
        hanzi: ['师傅，', '麻烦...'],
        pinyin: ['Shīfu', 'máfan'],
      },
    },
    {
      id: 'sentence51',
      level: 3,
      isFinal: false,
      korean: '조금(좀) 빨리',
      chinese: {
        hanzi: ['快点'],
        pinyin: ['Kuài diǎn'],
      },
    },
    {
      id: 'sentence51',
      level: 4,
      isFinal: false,
      korean: '당신 조금(좀) 빨리',
      chinese: {
        hanzi: ['您', '快点'],
        pinyin: ['Nín', 'kuài diǎn'],
      },
    },
    {
      id: 'sentence51',
      level: 5,
      isFinal: false,
      korean: '죄송하지만 당신은 조금 빨리',
      chinese: {
        hanzi: ['麻烦', '您', '快点'],
        pinyin: ['Máfan', 'nín', 'kuài diǎn'],
      },
    },
    {
      id: 'sentence51',
      level: 6,
      isFinal: true,
      korean:
        '기사님, 죄송하지만 조금 빨리 가주세요 ***중국어에서 "가주세요"는 생략되었어요.',
      chinese: {
        hanzi: ['师傅，', '麻烦', '您', '快点'],
        pinyin: ['Shīfu', 'máfan', 'nín', 'kuài diǎn'],
      },
    },

    // 52번
    {
      id: 'sentence52',
      level: 1,
      isFinal: false,
      korean: '시간이 급하다, 시간을 서두르다',
      chinese: {
        hanzi: ['赶', '时间'],
        pinyin: ['Gǎn', 'shíjiān'],
      },
    },
    {
      id: 'sentence52',
      level: 2,
      isFinal: false,
      korean: '제가 시간이 급해서요',
      chinese: {
        hanzi: ['我', '赶', '时间'],
        pinyin: ['Wǒ', 'gǎn', 'shíjiān'],
      },
    },
    {
      id: 'sentence52',
      level: 3,
      isFinal: false,
      korean: '기사님, 제가 시간이 급해서요',
      chinese: {
        hanzi: ['师傅，', '我', '赶', '时间'],
        pinyin: ['Shīfu', 'wǒ', 'gǎn', 'shíjiān'],
      },
    },
    {
      id: 'sentence52',
      level: 4,
      isFinal: true,
      korean:
        '기사님, 제가 시간이 급해서요. 죄송하지만 조금 빨리 가주세요 ***중국어에서 "가주세요"는 생략되었어요.',
      chinese: {
        hanzi: ['师傅，', '我', '赶', '时间，', '麻烦', '您', '快点'],
        pinyin: ['Shīfu', 'wǒ', 'gǎn', 'shíjiān', 'máfan', 'nín', 'kuài diǎn'],
      },
    },

    // 53번
    {
      id: 'sentence53',
      level: 1,
      isFinal: false,
      korean: '나를 기다리다',
      chinese: {
        hanzi: ['等', '我'],
        pinyin: ['Děng', 'wǒ'],
      },
    },
    {
      id: 'sentence53',
      level: 2,
      isFinal: false,
      korean:
        '잠깐 저를 기다려주세요 ***我 wǒ, 你 nǐ, 他(她) tā와 같은 인칭대명사는 "等"과 "一下" 사이에 넣기로 약속!',
      chinese: {
        hanzi: ['等', '我', '一下'],
        pinyin: ['Děng', 'wǒ', 'yíxià'],
      },
    },
    {
      id: 'sentence53',
      level: 3,
      isFinal: false,
      korean: '과일가게 앞에서 저를 잠깐 기다려주실 수 있으실까요?',
      chinese: {
        hanzi: ['能', '在', '水果店', '门口', '等', '我', '一下', '吗？'],
        pinyin: [
          'Néng',
          'zài',
          'shuǐguǒdiàn',
          'ménkǒu',
          'děng',
          'wǒ',
          'yíxià',
          'ma',
        ],
      },
    },
    {
      id: 'sentence53',
      level: 4,
      isFinal: true,
      korean: '기사님, 과일가게 앞에서 저를 잠깐 기다려주실 수 있으실까요?',
      chinese: {
        hanzi: [
          '师傅，',
          '能',
          '在',
          '水果店',
          '门口',
          '等',
          '我',
          '一下',
          '吗？',
        ],
        pinyin: [
          'Shīfu',
          'néng',
          'zài',
          'shuǐguǒdiàn',
          'ménkǒu',
          'děng',
          'wǒ',
          'yíxià',
          'ma',
        ],
      },
    },

    // 54번
    {
      id: 'sentence54',
      level: 1,
      isFinal: false,
      korean: '과일을 팔다',
      chinese: {
        hanzi: ['卖', '水果'],
        pinyin: ['Mài', 'shuǐguǒ'],
      },
    },
    {
      id: 'sentence54',
      level: 2,
      isFinal: false,
      korean: '과일 파는 (곳)',
      chinese: {
        hanzi: ['卖', '水果', '的'],
        pinyin: ['Mài', 'shuǐguǒ', 'de'],
      },
    },
    {
      id: 'sentence54',
      level: 3,
      isFinal: false,
      korean: '과일 파는 데도 없어서요',
      chinese: {
        hanzi: ['都', '没有', '卖', '水果', '的'],
        pinyin: ['Dōu', 'méiyǒu', 'mài', 'shuǐguǒ', 'de'],
      },
    },
    {
      id: 'sentence54',
      level: 4,
      isFinal: false,
      korean: '호텔 근처 ***酒店 jiǔdiàn 호텔 附近 fùjìn 근처, 부근',
      chinese: {
        hanzi: ['酒店', '附近'],
        pinyin: ['jiǔdiàn', 'fùjìn'],
      },
    },
    {
      id: 'sentence54',
      level: 5,
      isFinal: false,
      korean: '내가 묵는 호텔 근처',
      chinese: {
        hanzi: ['我', '住', '的', '酒店', '附近'],
        pinyin: ['wǒ', 'zhù', 'de', 'jiǔdiàn', 'fùjìn'],
      },
    },
    {
      id: 'sentence54',
      level: 6,
      isFinal: false,
      korean: '제가 묵는 호텔 근처에는 과일 파는 데도 없어서요.',
      chinese: {
        hanzi: [
          '我',
          '住',
          '的',
          '酒店',
          '附近',
          '都',
          '没有',
          '卖',
          '水果',
          '的',
        ],
        pinyin: [
          'wǒ',
          'zhù',
          'de',
          'jiǔdiàn',
          'fùjìn',
          'dōu',
          'méiyǒu',
          'mài',
          'shuǐguǒ',
          'de',
        ],
      },
    },
    {
      id: 'sentence54',
      level: 7,
      isFinal: true,
      korean:
        '기사님, 과일가게 앞에서 저를 잠깐 기다려주실 수 있으실까요? 제가 묵는 호텔 근처에는 과일 파는 데도 없어서요.',
      chinese: {
        hanzi: [
          '师傅，',
          '能',
          '在',
          '水果店',
          '门口',
          '等',
          '我',
          '一下',
          '吗？',
          '我',
          '住',
          '的',
          '酒店',
          '附近',
          '都',
          '没有',
          '卖',
          '水果',
          '的',
        ],
        pinyin: [
          'Shīfu',
          'néng',
          'zài',
          'shuǐguǒdiàn',
          'ménkǒu',
          'děng',
          'wǒ',
          'yíxià',
          'ma',
          'wǒ',
          'zhù',
          'de',
          'jiǔdiàn',
          'fùjìn',
          'dōu',
          'méiyǒu',
          'mài',
          'shuǐguǒ',
          'de',
        ],
      },
    },

    // 55번
    {
      id: 'sentence55',
      level: 1,
      isFinal: false,
      korean: '원하다',
      chinese: {
        hanzi: ['要'],
        pinyin: ['Yào'],
      },
    },
    {
      id: 'sentence55',
      level: 2,
      isFinal: false,
      korean: '원하지 않다, 하지 말아라',
      chinese: {
        hanzi: ['不', '要'],
        pinyin: ['Bú', 'yào'],
      },
    },
    {
      id: 'sentence55',
      level: 3,
      isFinal: false,
      korean: '고수를 원하지 않아요(넣지 마세요)',
      chinese: {
        hanzi: ['不', '要', '香菜'],
        pinyin: ['Bú', 'yào', 'xiāngcài'],
      },
    },
    {
      id: 'sentence55',
      level: 4,
      isFinal: true,
      korean: '고수를 원하지 않아요(넣지 마세요), 감사합니다',
      chinese: {
        hanzi: ['不', '要', '香菜，', '谢谢'],
        pinyin: ['Bú', 'yào', 'xiāngcài', 'xièxie'],
      },
    },

    // 56번
    {
      id: 'sentence56',
      level: 1,
      isFinal: false,
      korean: '먹어요',
      chinese: {
        hanzi: ['吃'],
        pinyin: ['Chī'],
      },
    },
    {
      id: 'sentence56',
      level: 2,
      isFinal: false,
      korean: '안 먹어요',
      chinese: {
        hanzi: ['不', '吃'],
        pinyin: ['Bù', 'chī'],
      },
    },
    {
      id: 'sentence56',
      level: 3,
      isFinal: true,
      korean:
        '고수 원하지 않아요(넣지 마세요), 감사합니다. 저는 고수를 안 먹어요',
      chinese: {
        hanzi: ['不', '要', '香菜,', '谢谢', '我', '不', '吃', '香菜'],
        pinyin: [
          'Bú',
          'yào',
          'xiāngcài',
          'xièxie',
          'wǒ',
          'bù',
          'chī',
          'xiāngcài',
        ],
      },
    },

    // 57번
    {
      id: 'sentence57',
      level: 1,
      isFinal: false,
      korean: '추천하다',
      chinese: {
        hanzi: ['推荐'],
        pinyin: ['Tuījiàn'],
      },
    },
    {
      id: 'sentence57',
      level: 2,
      isFinal: false,
      korean: '저에게 추천해 주세요',
      chinese: {
        hanzi: ['给', '我', '推荐'],
        pinyin: ['Gěi', 'wǒ', 'tuījiàn'],
      },
    },
    {
      id: 'sentence57',
      level: 3,
      isFinal: false,
      korean: '...할 수 있을까요?',
      chinese: {
        hanzi: ['能...吗?'],
        pinyin: ['Néng ma'],
      },
    },
    {
      id: 'sentence57',
      level: 4,
      isFinal: true,
      korean: '제게 추천해 주실 수 있으실까요?',
      chinese: {
        hanzi: ['能', '给', '我', '推荐', '吗？'],
        pinyin: ['Néng', 'gěi', 'wǒ', 'tuījiàn', 'ma'],
      },
    },

    // 58번
    {
      id: 'sentence58',
      level: 1,
      isFinal: false,
      korean: '맵지 않다',
      chinese: {
        hanzi: ['不', '辣'],
        pinyin: ['Bú', 'là'],
      },
    },
    {
      id: 'sentence58',
      level: 2,
      isFinal: false,
      korean: '안 매운 요리',
      chinese: {
        hanzi: ['不', '辣', '的', '菜'],
        pinyin: ['Bú', 'là', 'de', 'cài'],
      },
    },
    {
      id: 'sentence58',
      level: 3,
      isFinal: false,
      korean: '몇 개의 안 매운 요리',
      chinese: {
        hanzi: ['几', '个', '不', '辣', '的', '菜'],
        pinyin: ['Jǐ', 'ge', 'bú', 'là', 'de', 'cài'],
      },
    },
    {
      id: 'sentence58',
      level: 4,
      isFinal: false,
      korean: '안 매운 요리 몇 개를 추천해 주세요',
      chinese: {
        hanzi: ['推荐', '几', '个', '不', '辣', '的', '菜'],
        pinyin: ['Tuījiàn', 'jǐ', 'ge', 'bú', 'là', 'de', 'cài'],
      },
    },
    {
      id: 'sentence58',
      level: 5,
      isFinal: false,
      korean: '제게 안 매운 요리 몇 개를 추천해 주세요',
      chinese: {
        hanzi: ['给', '我', '推荐', '几', '个', '不', '辣', '的', '菜'],
        pinyin: ['Gěi', 'wǒ', 'tuījiàn', 'jǐ', 'ge', 'bú', 'là', 'de', 'cài'],
      },
    },
    {
      id: 'sentence58',
      level: 6,
      isFinal: false,
      korean: '...할 수 있을까요?',
      chinese: {
        hanzi: ['能...吗?'],
        pinyin: ['Néng ma'],
      },
    },

    {
      id: 'sentence58',
      level: 7,
      isFinal: true,
      korean: '제게 안 매운 요리 몇 개를 추천해 주실 수 있으실까요?',
      chinese: {
        hanzi: [
          '能',
          '给',
          '我',
          '推荐',
          '几',
          '个',
          '不',
          '辣',
          '的',
          '菜',
          '吗?',
        ],
        pinyin: [
          'Néng',
          'gěi',
          'wǒ',
          'tuījiàn',
          'jǐ',
          'ge',
          'bú',
          'là',
          'de',
          'cài',
          'ma',
        ],
      },
    },

    // 59번
    {
      id: 'sentence59',
      level: 1,
      isFinal: false,
      korean: '대표 요리, 간판 요리, 시그니처 요리',
      chinese: {
        hanzi: ['招牌', '菜'],
        pinyin: ['Zhāopái', 'cài'],
      },
    },
    {
      id: 'sentence59',
      level: 2,
      isFinal: true,
      korean: '시그니처 요리가 뭔가요?',
      chinese: {
        hanzi: ['招牌', '菜', '是', '什么？'],
        pinyin: ['Zhāopái', 'cài', 'shì', 'shénme'],
      },
    },

    // 60번
    {
      id: 'sentence60',
      level: 1,
      isFinal: false,
      korean: '소개하다',
      chinese: {
        hanzi: ['介绍'],
        pinyin: ['Jièshào'],
      },
    },
    {
      id: 'sentence60',
      level: 2,
      isFinal: false,
      korean: '소개 좀 해주세요',
      chinese: {
        hanzi: ['介绍', '一下'],
        pinyin: ['Jièshào', 'yíxià'],
      },
    },
    {
      id: 'sentence60',
      level: 3,
      isFinal: false,
      korean: '...해도 될까요(해주실 수 있을까요)?',
      chinese: {
        hanzi: ['可以...吗？'],
        pinyin: ['Kěyǐ ma'],
      },
    },
    {
      id: 'sentence60',
      level: 4,
      isFinal: false,
      korean: '소개 좀 해주실 수 있으실까요?',
      chinese: {
        hanzi: ['可以', '介绍', '一下', '吗？'],
        pinyin: ['Kěyǐ', 'jièshào', 'yíxià', 'ma'],
      },
    },
    {
      id: 'sentence60',
      level: 5,
      isFinal: true,
      korean: '시그니처 요리가 뭔가요? 소개 좀 해주실 수 있으실까요?',
      chinese: {
        hanzi: ['招牌', '菜', '是', '什么?', '可以', '介绍', '一下', '吗？'],
        pinyin: [
          'Zhāopái',
          'cài',
          'shì',
          'shénme',
          'kěyǐ',
          'jièshào',
          'yíxià',
          'ma',
        ],
      },
    },
  ],

  day7: [
    // 61번
    {
      id: 'sentence61',
      level: 1,
      isFinal: false,
      korean: '넣다',
      chinese: {
        hanzi: ['放'],
        pinyin: ['Fàng'],
      },
    },
    {
      id: 'sentence61',
      level: 2,
      isFinal: false,
      korean: '적게 넣다',
      chinese: {
        hanzi: ['少', '放'],
        pinyin: ['Shǎo', 'fàng'],
      },
    },
    {
      id: 'sentence61',
      level: 3,
      isFinal: false,
      korean: '고추를 적게 넣다 ***辣椒 làjiāo 고추',
      chinese: {
        hanzi: ['少', '放', '辣椒'],
        pinyin: ['Shǎo', 'fàng', 'làjiāo'],
      },
    },
    {
      id: 'sentence61',
      level: 4,
      isFinal: true,
      korean: '고추를 적게 넣어주실 수 있으실까요?',
      chinese: {
        hanzi: ['可以', '少', '放', '辣椒', '吗？'],
        pinyin: ['Kěyǐ', 'shǎo', 'fàng', 'làjiāo', 'ma'],
      },
    },

    // 62번
    {
      id: 'sentence62',
      level: 1,
      isFinal: false,
      korean: '매운 맛을 먹다 ***辣 là 매운 맛',
      chinese: {
        hanzi: ['吃', '辣'],
        pinyin: ['Chī', 'là'],
      },
    },
    {
      id: 'sentence62',
      level: 2,
      isFinal: false,
      korean: '매운 걸 먹을 수 있다',
      chinese: {
        hanzi: ['能', '吃', '辣'],
        pinyin: ['Néng', 'chī', 'là'],
      },
    },
    {
      id: 'sentence62',
      level: 3,
      isFinal: false,
      korean: '매운 걸 그다지 잘 못 먹어요',
      chinese: {
        hanzi: ['不太', '能', '吃', '辣'],
        pinyin: ['Bú tài', 'néng', 'chī', 'là'],
      },
    },
    {
      id: 'sentence62',
      level: 4,
      isFinal: false,
      korean: '저는 매운 걸 그다지 잘 못 먹어요',
      chinese: {
        hanzi: ['我', '不太', '能', '吃', '辣'],
        pinyin: ['Wǒ', 'bú tài', 'néng', 'chī', 'là'],
      },
    },
    {
      id: 'sentence62',
      level: 5,
      isFinal: true,
      korean:
        '고추를 적게 넣어주실 수 있으실까요? 저는 매운 걸 그다지 잘 못 먹어요',
      chinese: {
        hanzi: [
          '可以',
          '少',
          '放',
          '辣椒',
          '吗?',
          '我',
          '不太',
          '能',
          '吃',
          '辣',
        ],
        pinyin: [
          'Kěyǐ',
          'shǎo',
          'fàng',
          'làjiāo',
          'ma',
          'wǒ',
          'bú tài',
          'néng',
          'chī',
          'là',
        ],
      },
    },

    // 63번
    {
      id: 'sentence63',
      level: 1,
      isFinal: false,
      korean: '포장하다',
      chinese: {
        hanzi: ['打包'],
        pinyin: ['Dǎbāo'],
      },
    },
    {
      id: 'sentence63',
      level: 2,
      isFinal: true,
      korean:
        '포장이요, 감사합니다 ***"带走 dàizǒu (가져갈게요)"라고 말하기도 해요.',
      chinese: {
        hanzi: ['打包，', '谢谢'],
        pinyin: ['Dǎbāo', 'xièxie'],
      },
    },

    // 64번
    {
      id: 'sentence64',
      level: 1,
      isFinal: false,
      korean: '저를 도와주세요',
      chinese: {
        hanzi: ['帮', '我'],
        pinyin: ['Bāng', 'wǒ'],
      },
    },
    {
      id: 'sentence64',
      level: 2,
      isFinal: false,
      korean: '저를 도와 포장해 주세요',
      chinese: {
        hanzi: ['帮', '我', '打包'],
        pinyin: ['Bāng', 'wǒ', 'dǎbāo'],
      },
    },
    {
      id: 'sentence64',
      level: 3,
      isFinal: false,
      korean:
        '(저를 도와)포장해 주세요 ***"请 qǐng"이 들어가면 더욱 공손해져요.',
      chinese: {
        hanzi: ['请', '帮', '我', '打包'],
        pinyin: ['Qǐng', 'bāng', 'wǒ', 'dǎbāo'],
      },
    },
    {
      id: 'sentence64',
      level: 4,
      isFinal: true,
      korean: '(저를 도와)포장해 주세요, 감사합니다',
      chinese: {
        hanzi: ['请', '帮', '我', '打包，', '谢谢'],
        pinyin: ['Qǐng', 'bāng', 'wǒ', 'dǎbāo', 'xièxie'],
      },
    },

    // 65번
    {
      id: 'sentence65',
      level: 1,
      isFinal: false,
      korean: '디카페인(저카페인) ***低 dī 낮은 咖啡因 kāfēiyīn 카페인',
      chinese: {
        hanzi: ['低', '咖啡因'],
        pinyin: ['Dī', 'kāfēiyīn'],
      },
    },
    {
      id: 'sentence65',
      level: 2,
      isFinal: false,
      korean: '디카페인(저카페인) 음료',
      chinese: {
        hanzi: ['低', '咖啡因', '的', '饮料'],
        pinyin: ['Dī', 'kāfēiyīn', 'de', 'yǐnliào'],
      },
    },
    {
      id: 'sentence65',
      level: 3,
      isFinal: false,
      korean: '디카페인(저카페인) 음료 있어요',
      chinese: {
        hanzi: ['有', '低', '咖啡因', '的', '饮料'],
        pinyin: ['Yǒu', 'dī', 'kāfēiyīn', 'de', 'yǐnliào'],
      },
    },
    {
      id: 'sentence65',
      level: 4,
      isFinal: true,
      korean: '디카페인(저카페인) 음료 있나요?',
      chinese: {
        hanzi: ['有', '低', '咖啡因', '的(饮料)', '吗？'],
        pinyin: ['Yǒu', 'dī', 'kāfēiyīn', 'de(yǐnliào)', 'ma'],
      },
    },

    // 66번
    {
      id: 'sentence66',
      level: 1,
      isFinal: false,
      korean: '찾았다',
      chinese: {
        hanzi: ['找到'],
        pinyin: ['Zhǎodào'],
      },
    },
    {
      id: 'sentence66',
      level: 2,
      isFinal: false,
      korean: '못 찾았다',
      chinese: {
        hanzi: ['没', '找到'],
        pinyin: ['Méi', 'zhǎodào'],
      },
    },
    {
      id: 'sentence66',
      level: 3,
      isFinal: false,
      korean: '메뉴판에',
      chinese: {
        hanzi: ['在', '菜单', '上'],
        pinyin: ['Zài', 'càidān', 'shang'],
      },
    },
    {
      id: 'sentence66',
      level: 4,
      isFinal: false,
      korean: '메뉴판에서 못 찾겠어요',
      chinese: {
        hanzi: ['在', '菜单', '上', '没', '找到'],
        pinyin: ['Zài', 'càidān', 'shang', 'méi', 'zhǎodào'],
      },
    },
    {
      id: 'sentence66',
      level: 5,
      isFinal: true,
      korean: '저카페인 음료 있나요? 메뉴판에서 못 찾겠어요',
      chinese: {
        hanzi: [
          '有',
          '低',
          '咖啡因',
          '的(饮料)',
          '吗？',
          '我',
          '在',
          '菜单',
          '上',
          '没',
          '找到',
        ],
        pinyin: [
          'Yǒu',
          'dī',
          'kāfēiyīn',
          'de(yǐnliào)',
          'ma',
          'wǒ',
          'zài',
          'càidān',
          'shang',
          'méi',
          'zhǎodào',
        ],
      },
    },

    // 67번
    {
      id: 'sentence67',
      level: 1,
      isFinal: false,
      korean: '바꾸다',
      chinese: {
        hanzi: ['换'],
        pinyin: ['Huàn'],
      },
    },
    {
      id: 'sentence67',
      level: 2,
      isFinal: true,
      korean: '바꿔도 될까요?',
      chinese: {
        hanzi: ['可以', '换', '吗？'],
        pinyin: ['Kěyǐ', 'huàn', 'ma'],
      },
    },

    // 68번
    {
      id: 'sentence68',
      level: 1,
      isFinal: false,
      korean: '…로 바꾸다',
      chinese: {
        hanzi: ['换成'],
        pinyin: ['Huànchéng'],
      },
    },
    {
      id: 'sentence68',
      level: 2,
      isFinal: false,
      korean: '디카페인(저카페인) 음료로 바꾸다',
      chinese: {
        hanzi: ['换成', '低', '咖啡因', '的', '饮料'],
        pinyin: ['Huànchéng', 'dī', 'kāfēiyīn', 'de', 'yǐnliào'],
      },
    },
    {
      id: 'sentence68',
      level: 3,
      isFinal: true,
      korean: '디카페인(저카페인) 음료로 바꿔도 될까요?',
      chinese: {
        hanzi: ['可以', '换成', '低', '咖啡因', '的(饮料)', '吗？'],
        pinyin: ['Kěyǐ', 'huànchéng', 'dī', 'kāfēiyīn', 'de(yǐnliào)', 'ma'],
      },
    },

    // 69번
    {
      id: 'sentence69',
      level: 1,
      isFinal: false,
      korean: '디카페인, 카페인이 없다 ***无 wú 없다',
      chinese: {
        hanzi: ['无', '咖啡因'],
        pinyin: ['Wú', 'kāfēiyīn'],
      },
    },
    {
      id: 'sentence69',
      level: 2,
      isFinal: false,
      korean: '디카페인의 (것)',
      chinese: {
        hanzi: ['无', '咖啡因', '的'],
        pinyin: ['Wú', 'kāfēiyīn', 'de'],
      },
    },
    {
      id: 'sentence69',
      level: 3,
      isFinal: true,
      korean:
        '카페인 없는 것인가요? ***디카페인은 无咖啡因(wú kāfēiyīn)이라고도 해요. 앞에 나온 低咖啡因(dī kāfēiyīn)은 "저카페인"이라고 직역할 수 있지만 한국에서는 "디카페인"이라고 말해요.  “无咖啡因的? wú kāfēiyīn de"라고만 점원에게 질문하면 조금 예의 없어 보일 수 있어요.',
      chinese: {
        hanzi: ['(是)无', '咖啡因', '的', '吗？'],
        pinyin: ['(Shì) wú', 'kāfēiyīn', 'de', 'ma'],
      },
    },

    // 70번
    {
      id: 'sentence70',
      level: 1,
      isFinal: false,
      korean: '어느 게',
      chinese: {
        hanzi: ['哪个'],
        pinyin: ['Nǎ ge'],
      },
    },
    {
      id: 'sentence70',
      level: 2,
      isFinal: true,
      korean:
        '어느 게 카페인 없는 거예요? ***哪(nǎ 어느) 가 의문사이기 때문에 吗(ma)는 오지 않아요.',
      chinese: {
        hanzi: ['哪个', '是', '无', '咖啡因', '的？'],
        pinyin: ['Nǎ ge', 'shì', 'wú', 'kāfēiyīn', 'de'],
      },
    },
  ],

  day8: [
    // 71번
    {
      id: 'sentence71',
      level: 1,
      isFinal: false,
      korean: '있다',
      chinese: {
        hanzi: ['有'],
        pinyin: ['Yǒu'],
      },
    },
    {
      id: 'sentence71',
      level: 2,
      isFinal: false,
      korean: '아직(더) 있다',
      chinese: {
        hanzi: ['还', '有'],
        pinyin: ['Hái', 'yǒu'],
      },
    },
    {
      id: 'sentence71',
      level: 3,
      isFinal: false,
      korean: '냅킨',
      chinese: {
        hanzi: ['餐巾纸'],
        pinyin: ['Cānjīnzhǐ'],
      },
    },
    {
      id: 'sentence71',
      level: 4,
      isFinal: true,
      korean: '냅킨 더 있나요?',
      chinese: {
        hanzi: ['还', '有', '餐巾纸', '吗？'],
        pinyin: ['Hái', 'yǒu', 'cānjīnzhǐ', 'ma'],
      },
    },

    // 72번
    {
      id: 'sentence72',
      level: 1,
      isFinal: false,
      korean: '다 썼다',
      chinese: {
        hanzi: ['用完', '了'],
        pinyin: ['Yòngwán', 'le'],
      },
    },
    {
      id: 'sentence72',
      level: 2,
      isFinal: false,
      korean: '다 쓰지 않았다',
      chinese: {
        hanzi: ['没', '用完'],
        pinyin: ['Méi', 'yòngwán'],
      },
    },
    {
      id: 'sentence72',
      level: 3,
      isFinal: false,
      korean: '(마치)…인 것 같다',
      chinese: {
        hanzi: ['好像'],
        pinyin: ['Hǎoxiàng'],
      },
    },
    {
      id: 'sentence72',
      level: 4,
      isFinal: false,
      korean: '다 쓴 거 같아요.',
      chinese: {
        hanzi: ['好像', '用完', '了'],
        pinyin: ['Hǎoxiàng', 'yòngwán', 'le'],
      },
    },
    {
      id: 'sentence72',
      level: 5,
      isFinal: false,
      korean: '여기의 것',
      chinese: {
        hanzi: ['这里', '的'],
        pinyin: ['Zhèlǐ', 'de'],
      },
    },
    {
      id: 'sentence72',
      level: 6,
      isFinal: false,
      korean: '여기의 것은 다 쓴 것 같아요',
      chinese: {
        hanzi: ['这里', '的', '好像', '用完', '了'],
        pinyin: ['Zhèlǐ', 'de', 'hǎoxiàng', 'yòngwán', 'le'],
      },
    },
    {
      id: 'sentence72',
      level: 5,
      isFinal: true,
      korean: '냅킨 더 있나요? 여기의 것은 다 쓴 것 같아요',
      chinese: {
        hanzi: [
          '还',
          '有',
          '餐巾纸',
          '吗？',
          '这里',
          '的',
          '好像',
          '用完',
          '了',
        ],
        pinyin: [
          'Hái',
          'yǒu',
          'cānjīnzhǐ',
          'ma',
          'zhèlǐ',
          'de',
          'hǎoxiàng',
          'yòngwán',
          'le',
        ],
      },
    },

    // 73번
    {
      id: 'sentence73',
      level: 1,
      isFinal: false,
      korean: 'A는 B에 있다',
      chinese: {
        hanzi: ['A在B'],
        pinyin: ['Zài'],
      },
    },
    {
      id: 'sentence73',
      level: 2,
      isFinal: false,
      korean: '어디에 있어요?',
      chinese: {
        hanzi: ['在', '哪里?'],
        pinyin: ['Zài', 'nǎlǐ'],
      },
    },
    {
      id: 'sentence73',
      level: 3,
      isFinal: false,
      korean: '화장실',
      chinese: {
        hanzi: ['厕所'],
        pinyin: ['Cèsuǒ'],
      },
    },
    {
      id: 'sentence73',
      level: 4,
      isFinal: true,
      korean: '화장실 어디에 있나요?',
      chinese: {
        hanzi: ['厕所', '在', '哪里?'],
        pinyin: ['Cèsuǒ', 'zài', 'nǎlǐ'],
      },
    },

    // 74번
    {
      id: 'sentence74',
      level: 1,
      isFinal: false,
      korean:
        '휴지를 가지고 가다 ***带 dài 가지다, 휴대하다, 가지고 가다 纸 zhǐ 휴지, 종이',
      chinese: {
        hanzi: ['带', '纸'],
        pinyin: ['Dài', 'zhǐ'],
      },
    },
    {
      id: 'sentence74',
      level: 2,
      isFinal: false,
      korean: '스스로, 따로',
      chinese: {
        hanzi: ['自己'],
        pinyin: ['Zìjǐ'],
      },
    },
    {
      id: 'sentence74',
      level: 3,
      isFinal: false,
      korean: '휴지를 따로 가져가다',
      chinese: {
        hanzi: ['自己', '带', '纸'],
        pinyin: ['Zìjǐ', 'dài', 'zhǐ'],
      },
    },
    {
      id: 'sentence74',
      level: 4,
      isFinal: false,
      korean: '...해야 한다',
      chinese: {
        hanzi: ['要'],
        pinyin: ['Yào'],
      },
    },
    {
      id: 'sentence74',
      level: 5,
      isFinal: false,
      korean: '휴지를 따로(스스로) 가져가야하나요?',
      chinese: {
        hanzi: ['要', '自己', '带', '纸', '吗？'],
        pinyin: ['Yào', 'zìjǐ', 'dài', 'zhǐ', 'ma'],
      },
    },
    {
      id: 'sentence74',
      level: 6,
      isFinal: true,
      korean: '화장실 어디에 있나요? 휴지를 따로 가져가야 하나요?',
      chinese: {
        hanzi: ['厕所', '在', '哪里?', '要', '自己', '带', '纸', '吗？'],
        pinyin: ['Cèsuǒ', 'zài', 'nǎlǐ', 'yào', 'zìjǐ', 'dài', 'zhǐ', 'ma'],
      },
    },

    // 75번
    {
      id: 'sentence75',
      level: 1,
      isFinal: false,
      korean: '늦다',
      chinese: {
        hanzi: ['迟'],
        pinyin: ['Chí'],
      },
    },
    {
      id: 'sentence75',
      level: 2,
      isFinal: false,
      korean:
        '조금 늦어요 ***一会儿 yíhuìr 잠시. 잠깐 동안. ->짧은 시간을 나타내요.',
      chinese: {
        hanzi: ['迟', '一会儿'],
        pinyin: ['Chí', 'yíhuìr'],
      },
    },
    {
      id: 'sentence75',
      level: 3,
      isFinal: false,
      korean: '…일 것이다, …할 것이다',
      chinese: {
        hanzi: ['会'],
        pinyin: ['Huì'],
      },
    },
    {
      id: 'sentence75',
      level: 4,
      isFinal: false,
      korean: '조금 늦을 거예요',
      chinese: {
        hanzi: ['会', '迟', '一会儿'],
        pinyin: ['Huì', 'chí', 'yíhuìr'],
      },
    },
    {
      id: 'sentence75',
      level: 5,
      isFinal: false,
      korean: '미안해요, 죄송해요',
      chinese: {
        hanzi: ['不好意思'],
        pinyin: ['Bùhǎoyìsi'],
      },
    },
    {
      id: 'sentence75',
      level: 6,
      isFinal: true,
      korean: '[통화 중] 미안해요, 저는 조금 늦을 거예요',
      chinese: {
        hanzi: ['不好意思，', '我', '会', '迟', '一会儿'],
        pinyin: ['Bùhǎoyìsi', 'wǒ', 'huì', 'chí', 'yíhuìr'],
      },
    },

    // 76번
    {
      id: 'sentence76',
      level: 1,
      isFinal: false,
      korean: '길에 있어요, 가는 중이에요',
      chinese: {
        hanzi: ['在', '路上'],
        pinyin: ['Zài', 'lùshang'],
      },
    },
    {
      id: 'sentence76',
      level: 2,
      isFinal: false,
      korean: '아직 길에 있어요',
      chinese: {
        hanzi: ['还', '在', '路上'],
        pinyin: ['Hái', 'zài', 'lùshang'],
      },
    },
    {
      id: 'sentence76',
      level: 3,
      isFinal: false,
      korean: '저는 아직 가는 길이에요',
      chinese: {
        hanzi: ['我', '还', '在', '路上'],
        pinyin: ['Wǒ', 'hái', 'zài', 'lùshang'],
      },
    },
    {
      id: 'sentence76',
      level: 4,
      isFinal: false,
      korean: '저는 아직 가는 길이에요. 조금 늦을 거예요',
      chinese: {
        hanzi: ['我', '还', '在', '路上,', '会', '迟', '一会儿'],
        pinyin: ['Wǒ', 'hái', 'zài', 'lùshang', 'huì', 'chí', 'yíhuìr'],
      },
    },
    {
      id: 'sentence76',
      level: 5,
      isFinal: true,
      korean: '죄송해요, 아직 가는 중이라 조금 늦을 거예요',
      chinese: {
        hanzi: ['不好意思,', '我', '还', '在', '路上,', '会', '迟', '一会儿'],
        pinyin: [
          'Bùhǎoyìsi',
          'wǒ',
          'hái',
          'zài',
          'lùshang',
          'huì',
          'chí',
          'yíhuìr',
        ],
      },
    },

    // 77번
    {
      id: 'sentence77',
      level: 1,
      isFinal: false,
      korean: '명함',
      chinese: {
        hanzi: ['名片'],
        pinyin: ['Míngpiàn'],
      },
    },
    {
      id: 'sentence77',
      level: 2,
      isFinal: false,
      korean: '제 명함',
      chinese: {
        hanzi: ['我', '的', '名片'],
        pinyin: ['Wǒ', 'de', 'míngpiàn'],
      },
    },
    {
      id: 'sentence77',
      level: 3,
      isFinal: true,
      korean: '이건 제 명함이에요',
      chinese: {
        hanzi: ['这', '是', '我', '的', '名片'],
        pinyin: ['Zhè', 'shì', 'wǒ', 'de', 'míngpiàn'],
      },
    },

    // 78번
    {
      id: 'sentence78',
      level: 1,
      isFinal: false,
      korean: '저는 OOO입니다',
      chinese: {
        hanzi: ['我', '是 OOO'],
        pinyin: ['Wǒ', 'shì'],
      },
    },
    {
      id: 'sentence78',
      level: 2,
      isFinal: true,
      korean: '안녕하세요. 저는 OOO입니다. 이건 제 명함이에요',
      chinese: {
        hanzi: ['您好,', '我', '是 OOO,', '这', '是', '我', '的', '名片'],
        pinyin: ['Nín hǎo', 'wǒ', 'shì', 'zhè', 'shì', 'wǒ', 'de', 'míngpiàn'],
      },
    },

    // 79번
    {
      id: 'sentence79',
      level: 1,
      isFinal: false,
      korean: 'A는 B에 있다',
      chinese: {
        hanzi: ['A在B'],
        pinyin: ['Zài'],
      },
    },
    {
      id: 'sentence79',
      level: 2,
      isFinal: false,
      korean: '몇 층에 있어요? *** 几 jǐ 몇 楼 lóu 층',
      chinese: {
        hanzi: ['在', '几', '楼'],
        pinyin: ['Zài', 'jǐ', 'lóu'],
      },
    },
    {
      id: 'sentence79',
      level: 3,
      isFinal: false,
      korean: '회의실',
      chinese: {
        hanzi: ['会议室'],
        pinyin: ['Huìyìshì'],
      },
    },
    {
      id: 'sentence79',
      level: 4,
      isFinal: true,
      korean: '회의실은 몇 층에 있나요?',
      chinese: {
        hanzi: ['会议室', '在', '几', '楼？'],
        pinyin: ['Huìyìshì', 'zài', 'jǐ', 'lóu'],
      },
    },

    // 80번
    {
      id: 'sentence80',
      level: 1,
      isFinal: false,
      korean: '여쭤볼게요',
      chinese: {
        hanzi: ['请问'],
        pinyin: ['Qǐngwèn'],
      },
    },
    {
      id: 'sentence80',
      level: 2,
      isFinal: true,
      korean: '여쭤볼게요, 회의실은 몇 층에 있나요?',
      chinese: {
        hanzi: ['请问，', '会议室', '在', '几', '楼？'],
        pinyin: ['Qǐngwèn', 'huìyìshì', 'zài', 'jǐ', 'lóu'],
      },
    },
  ],

  day9: [
    // 81번
    {
      id: 'sentence81',
      level: 1,
      isFinal: false,
      korean: 'PPT를 재생하다',
      chinese: {
        hanzi: ['播放', 'PPT'],
        pinyin: ['Bōfàng', ''],
      },
    },
    {
      id: 'sentence81',
      level: 2,
      isFinal: false,
      korean: 'PPT 틀 수 있을까요?',
      chinese: {
        hanzi: ['能', '播放', 'PPT', '吗？'],
        pinyin: ['Néng', 'bōfàng', '', 'ma'],
      },
    },
    {
      id: 'sentence81',
      level: 3,
      isFinal: true,
      korean: '회의실에서 PPT 틀 수 있을까요(재생 할 수 있나요)?',
      chinese: {
        hanzi: ['会议室', '能', '播放', 'PPT', '吗？'],
        pinyin: ['Huìyìshì', 'néng', 'bōfàng', '', 'ma'],
      },
    },

    // 82번
    {
      id: 'sentence82',
      level: 1,
      isFinal: false,
      korean: 'PPT를 준비했다',
      chinese: {
        hanzi: ['准备', '了', 'PPT'],
        pinyin: ['Zhǔnbèi', 'le', ''],
      },
    },
    {
      id: 'sentence82',
      level: 2,
      isFinal: false,
      korean: '제가 PPT를 준비했는데요',
      chinese: {
        hanzi: ['我', '准备', '了', 'PPT'],
        pinyin: ['Wǒ', 'zhǔnbèi', 'le', ''],
      },
    },
    {
      id: 'sentence82',
      level: 3,
      isFinal: true,
      korean:
        '제가 PPT를 준비했는데, 회의실에서 재생할 수 있나요? ***"PPT를 틀다"라고 할 때 播放(bōfàng)을 放(fàng)으로 줄여서 간단하게 말하기도 해요. ',
      chinese: {
        hanzi: ['我', '准备', '了', 'PPT,', '会议室', '能', '播放', '吗？'],
        pinyin: ['Wǒ', 'zhǔnbèi', 'le', '', 'huìyìshì', 'néng', 'bōfàng', 'ma'],
      },
    },

    // 83번
    {
      id: 'sentence83',
      level: 1,
      isFinal: false,
      korean: 'A에는 B가 있다',
      chinese: {
        hanzi: ['A有B'],
        pinyin: ['yǒu'],
      },
    },
    {
      id: 'sentence83',
      level: 2,
      isFinal: false,
      korean: '다른 색 ***别的 bié de 다른 颜色 yánsè 색깔',
      chinese: {
        hanzi: ['别的', '颜色'],
        pinyin: ['Bié de', 'yánsè'],
      },
    },
    {
      id: 'sentence83',
      level: 2,
      isFinal: false,
      korean: '다른 색 있어요',
      chinese: {
        hanzi: ['有', '别的', '颜色'],
        pinyin: ['Yǒu', 'bié de', 'yánsè'],
      },
    },
    {
      id: 'sentence83',
      level: 3,
      isFinal: true,
      korean: '이거 다른 색 있어요?',
      chinese: {
        hanzi: ['这个', '有', '别的', '颜色', '吗？'],
        pinyin: ['Zhè ge', 'yǒu', 'bié de', 'yánsè', 'ma'],
      },
    },

    // 84번
    {
      id: 'sentence84',
      level: 1,
      isFinal: false,
      korean: '튀다',
      chinese: {
        hanzi: ['张扬'],
        pinyin: ['Zhāngyáng'],
      },
    },
    {
      id: 'sentence84',
      level: 2,
      isFinal: false,
      korean: '너무...하다',
      chinese: {
        hanzi: ['太...了'],
        pinyin: ['Tài le'],
      },
    },
    {
      id: 'sentence84',
      level: 3,
      isFinal: false,
      korean: '너무 튀어요',
      chinese: {
        hanzi: ['太', '张扬', '了'],
        pinyin: ['Tài', 'zhāngyáng', 'le'],
      },
    },
    {
      id: 'sentence84',
      level: 4,
      isFinal: false,
      korean: '좀 너무 튀어요',
      chinese: {
        hanzi: ['有点', '太', '张扬', '了'],
        pinyin: ['Yǒudiǎn', 'tài', 'zhāngyáng', 'le'],
      },
    },
    {
      id: 'sentence84',
      level: 5,
      isFinal: false,
      korean: '좀 너무 튀는 것 같아요',
      chinese: {
        hanzi: ['好像', '有点', '太', '张扬', '了'],
        pinyin: ['Hǎoxiàng', 'yǒudiǎn', 'tài', 'zhāngyáng', 'le'],
      },
    },
    {
      id: 'sentence84',
      level: 6,
      isFinal: true,
      korean: '이거 다른 색 있어요? 좀 너무 튀는 것 같아서요',
      chinese: {
        hanzi: [
          '这个',
          '有',
          '别的',
          '颜色',
          '吗？',
          '好像',
          '有点',
          '太',
          '张扬',
          '了',
        ],
        pinyin: [
          'Zhè ge',
          'yǒu',
          'bié de',
          'yánsè',
          'ma',
          'hǎoxiàng',
          'yǒudiǎn',
          'tài',
          'zhāngyáng',
          'le',
        ],
      },
    },

    // 85번
    {
      id: 'sentence85',
      level: 1,
      isFinal: false,
      korean: '입어보다',
      chinese: {
        hanzi: ['试穿'],
        pinyin: ['Shìchuān'],
      },
    },
    {
      id: 'sentence85',
      level: 2,
      isFinal: true,
      korean: '입어봐도 돼요?',
      chinese: {
        hanzi: ['可以', '试穿', '吗？'],
        pinyin: ['Kěyǐ', 'shìchuān', 'ma'],
      },
    },

    // 86번
    {
      id: 'sentence86',
      level: 1,
      isFinal: false,
      korean: '어디에 있어요?',
      chinese: {
        hanzi: ['在', '哪里?'],
        pinyin: ['Zài', 'nǎlǐ'],
      },
    },
    {
      id: 'sentence86',
      level: 2,
      isFinal: false,
      korean: '탈의실은 어디에 있어요',
      chinese: {
        hanzi: ['试衣间', '在', '哪里'],
        pinyin: ['Shìyījiān', 'zài', 'nǎlǐ'],
      },
    },
    {
      id: 'sentence86',
      level: 3,
      isFinal: true,
      korean: '입어봐도 돼요? 탈의실은 어디에 있나요?',
      chinese: {
        hanzi: ['可以', '试穿', '吗？', '试衣间', '在', '哪里？'],
        pinyin: ['Kěyǐ', 'shìchuān', 'ma', 'shìyījiān', 'zài', 'nǎlǐ'],
      },
    },

    // 87번
    {
      id: 'sentence87',
      level: 1,
      isFinal: false,
      korean: '좀 보다',
      chinese: {
        hanzi: ['看看'],
        pinyin: ['Kànkan'],
      },
    },
    {
      id: 'sentence87',
      level: 2,
      isFinal: true,
      korean: '저 좀 (더) 볼게요',
      chinese: {
        hanzi: ['我', '看看'],
        pinyin: ['Wǒ', 'kànkan'],
      },
    },

    // 88번
    {
      id: 'sentence88',
      level: 1,
      isFinal: false,
      korean: '(매우) 확실해요',
      chinese: {
        hanzi: ['很', '确定'],
        pinyin: ['Hěn', 'quèdìng'],
      },
    },
    {
      id: 'sentence88',
      level: 2,
      isFinal: false,
      korean: '확실(히 정)한게 아니예요',
      chinese: {
        hanzi: ['不是', '很', '确定'],
        pinyin: ['Bú shì', 'hěn', 'quèdìng'],
      },
    },
    {
      id: 'sentence88',
      level: 3,
      isFinal: false,
      korean: '아직 확실(히 정)한게 아니예요',
      chinese: {
        hanzi: ['还', '不是', '很', '确定'],
        pinyin: ['Hái', 'bú shì', 'hěn', 'quèdìng'],
      },
    },
    {
      id: 'sentence88',
      level: 4,
      isFinal: true,
      korean:
        '[점원이 도움필요한지 물어본 상황] 저 좀 (더) 볼게요. 아직 확실히 정하지 않아서요.',
      chinese: {
        hanzi: ['我', '看看，', '还', '不是', '很', '确定'],
        pinyin: ['Wǒ', 'kànkan', 'hái', 'bú shì', 'hěn', 'quèdìng'],
      },
    },

    // 89번
    {
      id: 'sentence89',
      level: 1,
      isFinal: false,
      korean: '비싸다',
      chinese: {
        hanzi: ['贵'],
        pinyin: ['Guì'],
      },
    },
    {
      id: 'sentence89',
      level: 2,
      isFinal: true,
      korean: '너무 비싸요',
      chinese: {
        hanzi: ['太', '贵', '了'],
        pinyin: ['Tài', 'guì', 'le'],
      },
    },

    // 90번
    {
      id: 'sentence90',
      level: 1,
      isFinal: false,
      korean: '싸다',
      chinese: {
        hanzi: ['便宜'],
        pinyin: ['Piányi'],
      },
    },
    {
      id: 'sentence90',
      level: 2,
      isFinal: false,
      korean: '조금 싸게 해주세요',
      chinese: {
        hanzi: ['便宜', '一点'],
        pinyin: ['Piányi', 'yìdiǎn'],
      },
    },
    {
      id: 'sentence90',
      level: 3,
      isFinal: false,
      korean: '조금 싸게 해주실 수 있나요?',
      chinese: {
        hanzi: ['便宜', '一点', '可以', '吗？'],
        pinyin: ['Piányi', 'yìdiǎn', 'kěyǐ', 'ma'],
      },
    },
    {
      id: 'sentence90',
      level: 4,
      isFinal: true,
      korean: '너무 비싼데, 조금 싸게 해주실 수 있나요?',
      chinese: {
        hanzi: ['太', '贵', '了,', '便宜', '一点', '可以', '吗？'],
        pinyin: ['Tài', 'guì', 'le', 'piányi', 'yìdiǎn', 'kěyǐ', 'ma'],
      },
    },
  ],

  day10: [
    // 91번
    {
      id: 'sentence91',
      level: 1,
      isFinal: false,
      korean: '어떻게 가요? ***怎么 zĕnme 어떻게 走 zǒu 가다',
      chinese: {
        hanzi: ['怎么', '走?'],
        pinyin: ['Zěnme', 'zǒu'],
      },
    },
    {
      id: 'sentence91',
      level: 2,
      isFinal: false,
      korean: '지하철역',
      chinese: {
        hanzi: ['地铁站'],
        pinyin: ['Dìtiězhàn'],
      },
    },
    {
      id: 'sentence91',
      level: 3,
      isFinal: true,
      korean: '지하철역은 어떻게 가요?',
      chinese: {
        hanzi: ['地铁站', '怎么', '走？'],
        pinyin: ['Dìtiězhàn', 'zěnme', 'zǒu'],
      },
    },

    // 92번
    {
      id: 'sentence92',
      level: 1,
      isFinal: false,
      korean: '지하철역에 가다',
      chinese: {
        hanzi: ['去', '地铁站'],
        pinyin: ['Qù', 'dìtiězhàn'],
      },
    },
    {
      id: 'sentence92',
      level: 2,
      isFinal: false,
      korean: '…하고 싶다',
      chinese: {
        hanzi: ['想'],
        pinyin: ['Xiǎng'],
      },
    },
    {
      id: 'sentence92',
      level: 3,
      isFinal: false,
      korean: '저는 지하철역에 가고 싶어요',
      chinese: {
        hanzi: ['我', '想', '去', '地铁站'],
        pinyin: ['Wǒ', 'xiǎng', 'qù', 'dìtiězhàn'],
      },
    },
    {
      id: 'sentence92',
      level: 4,
      isFinal: false,
      korean:
        '(마땅히)...해야 한다 ***应该 yīnggāi = 该 gāi (마땅히) …해야 한다',
      chinese: {
        hanzi: ['该'],
        pinyin: ['Gāi'],
      },
    },

    {
      id: 'sentence92',
      level: 5,
      isFinal: false,
      korean: '어떻게 가야 해요?',
      chinese: {
        hanzi: ['该', '怎么', '走？'],
        pinyin: ['Gāi', 'zěnme', 'zǒu'],
      },
    },
    {
      id: 'sentence92',
      level: 6,
      isFinal: true,
      korean: '저는 지하철역에 가고 싶은데 어떻게 가야 해요?',
      chinese: {
        hanzi: ['我', '想', '去', '地铁站，', '该', '怎么', '走？'],
        pinyin: ['Wǒ', 'xiǎng', 'qù', 'dìtiězhàn', 'gāi', 'zěnme', 'zǒu'],
      },
    },

    // 93번
    {
      id: 'sentence93',
      level: 1,
      isFinal: false,
      korean: '…걸리다, 필요하다',
      chinese: {
        hanzi: ['要'],
        pinyin: ['Yào'],
      },
    },
    {
      id: 'sentence93',
      level: 2,
      isFinal: false,
      korean:
        '얼마나 긴 시간 ***多 duō 얼마나 ***长 cháng 긴 时间 shíjiān 시간',
      chinese: {
        hanzi: ['多', '长', '时间'],
        pinyin: ['Duō', 'cháng', 'shíjiān'],
      },
    },
    {
      id: 'sentence93',
      level: 3,
      isFinal: false,
      korean: '얼마나 걸려요?',
      chinese: {
        hanzi: ['要', '多长', '时间'],
        pinyin: ['Yào', 'duō cháng', 'shíjiān'],
      },
    },
    {
      id: 'sentence93',
      level: 4,
      isFinal: false,
      korean: '공항까지 ***到 dào …까지 机场 jīchǎng 공항',
      chinese: {
        hanzi: ['到', '机场'],
        pinyin: ['Dào', 'jīchǎng'],
      },
    },
    {
      id: 'sentence93',
      level: 5,
      isFinal: true,
      korean:
        '공항까지 얼마나 걸려요? ***多(duō 얼마나) 가 의문사이기 때문에 吗(ma)는 오지 않아요.',
      chinese: {
        hanzi: ['到', '机场', '要', '多长', '时间？'],
        pinyin: ['Dào', 'jīchǎng', 'yào', 'duō cháng', 'shíjiān'],
      },
    },

    // 94번
    {
      id: 'sentence94',
      level: 1,
      isFinal: false,
      korean: '공항버스가 있다 ***A 有 B yǒu A에 B가 있다',
      chinese: {
        hanzi: ['有', '机场', '巴士'],
        pinyin: ['Yǒu', 'jīchǎng', 'bāshì'],
      },
    },
    {
      id: 'sentence94',
      level: 2,
      isFinal: false,
      korean: '근처',
      chinese: {
        hanzi: ['附近'],
        pinyin: ['Fùjìn'],
      },
    },
    {
      id: 'sentence94',
      level: 3,
      isFinal: false,
      korean: '근처에 공항버스 있어요',
      chinese: {
        hanzi: ['附近', '有', '机场', '巴士'],
        pinyin: ['Fùjìn', 'yǒu', 'jīchǎng', 'bāshì'],
      },
    },
    {
      id: 'sentence94',
      level: 4,
      isFinal: false,
      korean: '근처에 공항버스 있어요?',
      chinese: {
        hanzi: ['附近', '有', '机场', '巴士', '吗？'],
        pinyin: ['Fùjìn', 'yǒu', 'jīchǎng', 'bāshì', 'ma'],
      },
    },
    {
      id: 'sentence94',
      level: 5,
      isFinal: true,
      korean: '공항까지 얼마나 걸려요? 근처에 공항버스 있나요?',
      chinese: {
        hanzi: [
          '到',
          '机场',
          '要',
          '多长',
          '时间?',
          '附近',
          '有',
          '机场',
          '巴士',
          '吗?',
        ],
        pinyin: [
          'Dào',
          'jīchǎng',
          'yào',
          'duō cháng',
          'shíjiān',
          'fùjìn',
          'yǒu',
          'jīchǎng',
          'bāshì',
          'ma',
        ],
      },
    },

    // 95번
    {
      id: 'sentence95',
      level: 1,
      isFinal: false,
      korean: '어디에서, 어디에 있나요?',
      chinese: {
        hanzi: ['在', '哪儿'],
        pinyin: ['Zài', 'nǎr'],
      },
    },
    {
      id: 'sentence95',
      level: 2,
      isFinal: false,
      korean: '어디에서 타나요? ***坐 zuò 타다, 앉다',
      chinese: {
        hanzi: ['在', '哪儿', '坐？'],
        pinyin: ['Zài', 'nǎr', 'zuò'],
      },
    },
    {
      id: 'sentence95',
      level: 3,
      isFinal: false,
      korean: '버스',
      chinese: {
        hanzi: ['公交'],
        pinyin: ['Gōngjiāo'],
      },
    },
    {
      id: 'sentence95',
      level: 4,
      isFinal: true,
      korean: '버스는 어디에서 타나요?',
      chinese: {
        hanzi: ['公交', '在', '哪儿', '坐？'],
        pinyin: ['Gōngjiāo', 'zài', 'nǎr', 'zuò'],
      },
    },

    // 96번
    {
      id: 'sentence96',
      level: 1,
      isFinal: false,
      korean: '버스를 타다',
      chinese: {
        hanzi: ['坐', '公交'],
        pinyin: ['Zuò', 'gōngjiāo'],
      },
    },
    {
      id: 'sentence96',
      level: 2,
      isFinal: false,
      korean: '…해야 한다 ***"의지"가 느껴져요.',
      chinese: {
        hanzi: ['要'],
        pinyin: ['Yào'],
      },
    },
    {
      id: 'sentence96',
      level: 3,
      isFinal: false,
      korean: '저는 버스를 타야 해요',
      chinese: {
        hanzi: ['我', '要', '坐', '公交'],
        pinyin: ['Wǒ', 'yào', 'zuò', 'gōngjiāo'],
      },
    },

    {
      id: 'sentence96',
      level: 4,
      isFinal: false,
      korean: '타러 어디로 가야 하나요?',
      chinese: {
        hanzi: ['该', '去', '哪儿', '坐', '？'],
        pinyin: ['Gāi', 'qù', 'nǎr', 'zuò', '?'],
      },
    },
    {
      id: 'sentence96',
      level: 5,
      isFinal: true,
      korean: '저는 버스를 타야 하는데, 타러 어디로 가야 하나요?',
      chinese: {
        hanzi: ['我', '要', '坐', '公交，', '该', '去', '哪儿', '坐？'],
        pinyin: ['Wǒ', 'yào', 'zuò', 'gōngjiāo', 'gāi', 'qù', 'nǎr', 'zuò'],
      },
    },

    // 97번
    {
      id: 'sentence97',
      level: 1,
      isFinal: false,
      korean: '보이다',
      chinese: {
        hanzi: ['见'],
        pinyin: ['Jiàn'],
      },
    },
    {
      id: 'sentence97',
      level: 2,
      isFinal: false,
      korean: '안 보이다',
      chinese: {
        hanzi: ['不见'],
        pinyin: ['Bú jiàn'],
      },
    },
    {
      id: 'sentence97',
      level: 3,
      isFinal: false,
      korean: '~되었다 (완료)',
      chinese: {
        hanzi: ['了'],
        pinyin: ['le'],
      },
    },
    {
      id: 'sentence97',
      level: 4,
      isFinal: false,
      korean: '없어졌어요',
      chinese: {
        hanzi: ['不见', '了'],
        pinyin: ['Bú jiàn', 'le'],
      },
    },
    {
      id: 'sentence97',
      level: 5,
      isFinal: false,
      korean: '제 여권',
      chinese: {
        hanzi: ['我', '的', '护照'],
        pinyin: ['Wǒ', 'de', 'hùzhào'],
      },
    },
    {
      id: 'sentence97',
      level: 6,
      isFinal: true,
      korean: '제 여권이 없어졌어요!',
      chinese: {
        hanzi: ['我', '的', '护照', '不见', '了！'],
        pinyin: ['Wǒ', 'de', 'hùzhào', 'bú jiàn', 'le'],
      },
    },

    // 98번
    {
      id: 'sentence98',
      level: 1,
      isFinal: false,
      korean: '찾아봐',
      chinese: {
        hanzi: ['找找'],
        pinyin: ['Zhǎozhao'],
      },
    },
    {
      id: 'sentence98',
      level: 2,
      isFinal: false,
      korean: '다시',
      chinese: {
        hanzi: ['再'],
        pinyin: ['Zài'],
      },
    },
    {
      id: 'sentence98',
      level: 3,
      isFinal: false,
      korean: '다시 찾아봐',
      chinese: {
        hanzi: ['再', '找找'],
        pinyin: ['Zài', 'zhǎozhao'],
      },
    },
    {
      id: 'sentence98',
      level: 4,
      isFinal: false,
      korean: '제가 다시 한 번 찾아볼게요',
      chinese: {
        hanzi: ['我', '再', '找找'],
        pinyin: ['Wǒ', 'zài', 'zhǎozhao'],
      },
    },
    {
      id: 'sentence98',
      level: 5,
      isFinal: true,
      korean: '제 여권이 없어졌어요! 다시 한 번 찾아볼게요',
      chinese: {
        hanzi: ['我', '的', '护照', '不见', '了!', '我', '再', '找找'],
        pinyin: [
          'Wǒ',
          'de',
          'hùzhào',
          'bú jiàn',
          'le',
          'wǒ',
          'zài',
          'zhǎozhao',
        ],
      },
    },

    // 99번
    {
      id: 'sentence99',
      level: 1,
      isFinal: false,
      korean: '신고하다',
      chinese: {
        hanzi: ['报警'],
        pinyin: ['Bàojǐng'],
      },
    },
    {
      id: 'sentence99',
      level: 2,
      isFinal: false,
      korean: '(저 대신) 신고해 주세요 ***帮 bāng 돕다',
      chinese: {
        hanzi: ['帮', '我', '报警'],
        pinyin: ['Bāng', 'wǒ', 'bàojǐng'],
      },
    },
    {
      id: 'sentence99',
      level: 3,
      isFinal: false,
      korean: '...해주세요 ***"请 qǐng"이 들어가면 더욱 공손해져요. ',
      chinese: {
        hanzi: ['请'],
        pinyin: ['Qǐng'],
      },
    },
    {
      id: 'sentence99',
      level: 4,
      isFinal: true,
      korean: '[지나가는 사람에게 말하는 상황] (제 대신) 경찰에 신고해주세요!',
      chinese: {
        hanzi: ['请', '帮', '我', '报警！'],
        pinyin: ['Qǐng', 'bāng', 'wǒ', 'bàojǐng'],
      },
    },

    // 100번
    {
      id: 'sentence100',
      level: 1,
      isFinal: false,
      korean: '죄송합니다',
      chinese: {
        hanzi: ['不好意思'],
        pinyin: ['Bùhǎoyìsi'],
      },
    },
    {
      id: 'sentence100',
      level: 2,
      isFinal: true,
      korean:
        '[지나가는 사람에게 말하는 상황] 미안하지만 (제 대신) 경찰에 신고해주세요!',
      chinese: {
        hanzi: ['不好意思，', '请', '帮', '我', '报警！'],
        pinyin: ['Bùhǎoyìsi', 'qǐng', 'bāng', 'wǒ', 'bàojǐng'],
      },
    },
  ],
};

// 전역 변수로 내보내기
window.sentenceData = sentenceData;
