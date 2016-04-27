{
	"technology": {
		"2101": {
			"id": 2101,
			"picture": "shr/d/technology_picture/117262_3_3255_184516_004.png?ux=1442497198",
			"title": "АРСЕНАЛ",
			"info": "ИССЛЕДУЕТСЯ: Возможность построить Арсенал для производства боеприпасов.",
			"order": 30,
			"researchTime": 0.2,
			"price": {
				"253": "1",
				"61": "20",
				"65": "20"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tech": 2815,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 513,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2107": {
			"id": 2107,
			"picture": "shr/d/technology_picture/111563_3_3255_152942_e_g4l.png?ux=1442497198",
			"title": "ОСКОЛОЧНАЯ ГРАНАТА G-1",
			"info": "ИССЛЕДУЕТСЯ: Возможность производить осколочную гранату G-1.",
			"order": 0,
			"researchTime": 4,
			"price": {
				"253": "5",
				"61": "100",
				"64": "50"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 15,
						"choice": "ConditionRejectedGrenade"
					},
					"2": {
						"item": 2131,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 403,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2108": {
			"id": 2108,
			"picture": "shr/d/technology_picture/001_124876_3_3255_040.png?ux=1442497198",
			"title": "РАСПАД АНОМАЛИЙ ур.1",
			"info": "ИССЛЕДУЕТСЯ: Возможность получать при распаде аномалий 3 ресурса вместо 2.",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "5",
				"65": "50",
				"61": "100"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 15,
						"choice": "ConditionAnomaly"
					},
					"2": {
						"item": 2647,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"drop": 2109,
						"choice": "DiscoveryAnomalyDrop"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2110": {
			"id": 2110,
			"picture": "shr/d/technology_picture/114766_3_3181_113541_gm2_02.png?ux=1442497198",
			"title": "МЕДПАК U-3",
			"info": "ИССЛЕДУЕТСЯ: Медпак, который восстанавливает в бою 50% здоровья.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"253": "30",
				"61": "500",
				"244": "900"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 372,
						"count": 20,
						"choice": "ConditionUseAbility"
					},
					"2": {
						"item": 2145,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 371,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2116": {
			"id": 2116,
			"picture": "shr/d/technology_picture/129587_3_3255_115913_044.png?ux=1442497198",
			"title": "УЛУЧШЕННАЯ ОПТИКА ур.1",
			"info": "ИССЛЕДУЕТСЯ: Увеличение мощности ПРИЦЕЛЬНОГО ВЫСТРЕЛА на 5%.",
			"order": 0,
			"researchTime": 25,
			"price": {
				"253": "20",
				"61": "400",
				"65": "400"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2117,
						"count": 5,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2120,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "SnipeShotDamage",
						"value": 5,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2138": {
			"id": 2138,
			"picture": "shr/d/technology_picture/115475_3_3181_162426_gm3_02.png?ux=1442497198",
			"title": "ПОСОЛЬСТВО",
			"info": "ИССЛЕДУЕТСЯ: Возможность построить Посольство, где при помощи друзей можно получать дополнительный доход.",
			"order": 0,
			"researchTime": 20,
			"price": {
				"253": "15",
				"61": "200",
				"65": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 2,
						"choice": "ConditionTerraform"
					},
					"2": {
						"item": 2132,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 226,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2139": {
			"id": 2139,
			"picture": "shr/d/technology_picture/117262_3_3255_184521_007.png?ux=1442497198",
			"title": "АЭРОДРОМ",
			"info": "ИССЛЕДУЕТСЯ: Возможность построить Аэродром для вылетов на архипелаг.",
			"order": 40,
			"researchTime": 2,
			"price": {
				"253": "10",
				"61": "100",
				"65": "50"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tech": 2101,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 511,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2140": {
			"id": 2140,
			"picture": "shr/d/technology_picture/120796_3_15_173845_009.png?ux=1442497198",
			"title": "УСТАНОВКА \"ФЕНИКС\"",
			"info": "ИССЛЕДУЕТСЯ: Возможность построить установку \"ФЕНИКС\", способную наносить ракетные удары громадной силы.",
			"order": 0,
			"researchTime": 25,
			"price": {
				"253": "20",
				"61": "200",
				"64": "400"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 2134,
						"choice": "ConditionItem"
					},
					"2": {
						"tech": 5192,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 1224,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2141": {
			"id": 2141,
			"picture": "shr/d/technology_picture/123784_3_15_131542_011.png?ux=1442497198",
			"title": "ПОЛИГОН",
			"info": "ИССЛЕДУЕТСЯ: Возможность построить Полигон, где можно будет повысить запас здоровья в бою за счет тренировки  напарника.",
			"order": 0,
			"researchTime": 25,
			"price": {
				"253": "20",
				"61": "200",
				"65": "400"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2158,
						"count": 7,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2137,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 1389,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2142": {
			"id": 2142,
			"picture": "shr/d/technology_picture/121650_3_15_160157_010.png?ux=1442497198",
			"title": "ХРАНИЛИЩЕ",
			"info": "ИССЛЕДУЕТСЯ: Возможность построить Хранилище и увеличить предельное количество хранимых ресурсов.",
			"order": 0,
			"researchTime": 45,
			"price": {
				"253": "20",
				"61": "500",
				"64": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 7,
						"choice": "ConditionBreakGame"
					},
					"2": {
						"item": 2135,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 1241,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2143": {
			"id": 2143,
			"picture": "shr/d/technology_picture/117262_3_3255_184518_005.png?ux=1442497198",
			"title": "МАСТЕРСКАЯ",
			"info": "ИССЛЕДУЕТСЯ: Возможность построить Мастерскую, где можно будет модернизировать свое вооружение.",
			"order": 0,
			"researchTime": 20,
			"price": {
				"253": "15",
				"61": "150",
				"64": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 2,
						"choice": "ConditionPuzzle"
					},
					"2": {
						"item": 2136,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 552,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2179": {
			"id": 2179,
			"picture": "shr/d/technology_picture/124446_3_3255_130124_038.png?ux=1442497198",
			"title": "ПАТРОНЫ ДЛЯ АВТОМАТА",
			"info": "ИССЛЕДУЕТСЯ: Возможность производить патроны для автомата.",
			"order": 0,
			"researchTime": 20,
			"price": {
				"253": "15",
				"61": "150",
				"64": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2176,
						"count": 10,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2173,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 1779,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2180": {
			"id": 2180,
			"picture": "shr/d/technology_picture/124446_3_3255_164218_039.png?ux=1442497198",
			"title": "ПАТРОНЫ ДЛЯ ДРОБОВИКА",
			"info": "ИССЛЕДУЕТСЯ: Возможность производить патроны для дробовика.",
			"order": 0,
			"researchTime": 40,
			"price": {
				"253": "20",
				"61": "200",
				"64": "400"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2178,
						"count": 12,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2174,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 1780,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2181": {
			"id": 2181,
			"picture": "shr/d/technology_picture/124446_3_3255_162504_037.png?ux=1442497198",
			"title": "ПАТРОНЫ ДЛЯ ПУЛЕМЕТА",
			"info": "ИССЛЕДУЕТСЯ: Возможность производить патроны для пулемета.",
			"order": 0,
			"researchTime": 120,
			"price": {
				"253": "30",
				"244": "500",
				"65": "800"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2177,
						"count": 8,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2175,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 1781,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2247": {
			"id": 2247,
			"picture": "shr/d/technology_picture/124876_3_3255_135123_040.png?ux=1442497198",
			"title": "СТАЗИСНАЯ ЗАЩИТА",
			"info": "ИССЛЕДУЕТСЯ: При угрозе смерти сработает стазисное поле, которое замедлит всех врагов.",
			"order": 0,
			"researchTime": 30,
			"price": {
				"253": "20",
				"244": "250",
				"64": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 3,
						"choice": "ConditionKillDominator"
					},
					"2": {
						"item": 2246,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "StasisPreDeathDuration",
						"value": 1,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2250": {
			"id": 2250,
			"picture": "shr/d/technology_picture/001_124876_3_3255_040.png?ux=1442497198",
			"title": "РАСПАД АНОМАЛИЙ ур.2",
			"info": "ИССЛЕДУЕТСЯ: Возможность получать при распаде аномалий кристаллит с небольшой вероятностью.",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"244": "200",
				"65": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 25,
						"choice": "ConditionAnomaly"
					},
					"2": {
						"tech": 2108,
						"choice": "ConditionTech"
					},
					"3": {
						"item": 2248,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"drop": 2249,
						"choice": "DiscoveryAnomalyDrop"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2254": {
			"id": 2254,
			"picture": "shr/d/technology_picture/128154_3_15_113917_turel_1.png?ux=1442497198",
			"title": "ТУРЕЛЬ \"ЦЕРБЕР\"",
			"info": "ИССЛЕДУЕТСЯ: Улучшение защиты базы на 150.",
			"order": 0,
			"researchTime": 25,
			"price": {
				"253": "15",
				"244": "200",
				"65": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 3865,
						"count": 2,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2253,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 1831,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2257": {
			"id": 2257,
			"picture": "shr/d/technology_picture/129587_3_3255_115913_044.png?ux=1442497198",
			"title": "УЛУЧШЕННАЯ ОПТИКА ур.2",
			"info": "ИССЛЕДУЕТСЯ: Увеличение мощности ПРИЦЕЛЬНОГО ВЫСТРЕЛА на 10%.",
			"order": 0,
			"researchTime": 45,
			"price": {
				"253": "25",
				"244": "500",
				"65": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 20,
						"choice": "ConditionKillSniperShot"
					},
					"2": {
						"item": 2258,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 2116,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "SnipeShotDamage",
						"value": 10,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2260": {
			"id": 2260,
			"picture": "shr/d/technology_picture/123344_3_3255_175729_037.png?ux=1442497198",
			"title": "ПИСТОЛЕТ \"ГРОМОБОЙ\"",
			"info": "ИССЛЕДУЕТСЯ: Возможность создать пистолет \"Громобой\" с оптическим прицелом для ведения снайперского огня.",
			"order": 0,
			"researchTime": 1,
			"price": {
				"253": "5",
				"61": "150",
				"65": "50"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 3,
						"choice": "ConditionWinBattle"
					},
					"2": {
						"item": 2259,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 1402,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2262": {
			"id": 2262,
			"picture": "shr/d/technology_picture/124853_3_3255_151301_046.png?ux=1442497198",
			"title": "АВТОМАТ \"БОЕЦ\"",
			"info": "ИССЛЕДУЕТСЯ: Возможность создать автомат \"Боец\", который можно использовать как дополнительное оружие в бою.",
			"order": 0,
			"researchTime": 4,
			"price": {
				"253": "10",
				"61": "150",
				"64": "80"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 5,
						"choice": "ConditionWinBattle"
					},
					"2": {
						"item": 2261,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 23,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2280": {
			"id": 2280,
			"picture": "shr/d/technology_picture/125128_3_3255_184031_051.png?ux=1442497198",
			"title": "ДРОБОВИК \"СЕКАЧ\"",
			"info": "ИССЛЕДУЕТСЯ: Возможность создать дробовик \"Секач\", незаменимое оружие для борьбы на ближней дистанции.",
			"order": 0,
			"researchTime": 20,
			"price": {
				"253": "15",
				"61": "200",
				"64": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2178,
						"count": 8,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2278,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 1633,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2285": {
			"id": 2285,
			"picture": "shr/d/technology_picture/126573_3_7_171052_cosmo.png?ux=1442497198",
			"title": "КОСТЮМ СТРАЖА",
			"info": "ИССЛЕДУЕТСЯ: Возможность создать улучшенную модификацию костюма с повышенной степенью защиты.",
			"order": 0,
			"researchTime": 20,
			"price": {
				"253": "20",
				"61": "150",
				"64": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 10,
						"choice": "ConditionWinBattle"
					},
					"2": {
						"item": 2284,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 176,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2306": {
			"id": 2306,
			"picture": "shr/d/technology_picture/125214_3_3255_155506_055.png?ux=1442497198",
			"title": "ПУЛЕМЕТ \"ВУЛКАН\"",
			"info": "ИССЛЕДУЕТСЯ: Сверхскорострельный пулемет, способный наносить [ECE9DE]28[-]/[FE7E0D]48[-] урона.",
			"order": 900,
			"researchTime": 15,
			"price": {
				"253": "20",
				"61": "150",
				"65": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 3865,
						"count": 1,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2276,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 1711,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2312": {
			"id": 2312,
			"picture": "shr/d/technology_picture/129744_3_3255_132248_045.png?ux=1442497198",
			"title": "ПСИ-СИЛА: КУРС ПРАКТИКИ",
			"info": "ИССЛЕДУЕТСЯ: Практическая часть курса по управлению установкой \"ФЕНИКС\" и использованию в бою Пси-способностей.",
			"order": 100,
			"researchTime": 1,
			"price": {
				"253": "1",
				"244": "1",
				"65": "1"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 2313,
						"choice": "ConditionItem"
					},
					"2": {
						"tech": 5192,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "PsyShot",
						"value": 350,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2382": {
			"id": 2382,
			"picture": "shr/d/technology_picture/129994_3_3255_113014_046.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ ГРАНАТОМЕТА ур.1",
			"info": "ИССЛЕДУЕТСЯ: Увеличение мощности ГРАНАТОМЕТА на 10%.",
			"order": 0,
			"researchTime": 45,
			"price": {
				"253": "20",
				"244": "300",
				"64": "600"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2178,
						"count": 25,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2383,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 3085,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "GrenadeLauncherDamage",
						"value": 10,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2488": {
			"id": 2488,
			"picture": "shr/d/technology_picture/129017_3_3255_154405_s24_1.png?ux=1442497198",
			"title": "КОСТЮМ ШТУРМОВИКА",
			"info": "ИССЛЕДУЕТСЯ: Костюм со степенью защиты [ECE9DE]1200[-].",
			"order": 0,
			"researchTime": 60,
			"price": {
				"253": "30",
				"61": "300",
				"64": "600"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2158,
						"count": 10,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2487,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 2309,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2492": {
			"id": 2492,
			"picture": "shr/d/technology_picture/124495_3_3255_114435_044.png?ux=1442497198",
			"title": "ПИСТОЛЕТ \"БУЛЬДОГ\"",
			"info": "ИССЛЕДУЕТСЯ: Пистолет, способный наносить [ECE9DE]28[-]/[FE7E0D]48[-] урона.",
			"order": 0,
			"researchTime": 30,
			"price": {
				"253": "20",
				"61": "200",
				"65": "400"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2158,
						"count": 5,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2274,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 1513,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2552": {
			"id": 2552,
			"picture": "shr/d/technology_picture/124853_3_3255_155951_049.png?ux=1442497198",
			"title": "АВТОМАТ \"МСТИТЕЛЬ\"",
			"info": "ИССЛЕДУЕТСЯ: Автомат, способный наносить [ECE9DE]48[-]/[FE7E0D]78[-] урона.",
			"order": 0,
			"researchTime": 45,
			"price": {
				"253": "20",
				"61": "250",
				"64": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2176,
						"count": 20,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2270,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 1591,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2555": {
			"id": 2555,
			"picture": "shr/d/technology_picture/125214_3_3255_155503_054.png?ux=1442497198",
			"title": "ПУЛЕМЕТ \"КОММАНДОС\"",
			"info": "ИССЛЕДУЕТСЯ: Сверхскорострельный пулемет, способный наносить [ECE9DE]50[-]/[FE7E0D]85[-] урона.",
			"order": 900,
			"researchTime": 60,
			"price": {
				"253": "30",
				"61": "300",
				"65": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2177,
						"count": 4,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2277,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 2044,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2583": {
			"id": 2583,
			"picture": "shr/d/technology_picture/130142_3_3255_161111_048.png?ux=1442497198",
			"title": "ЧЕРНЫЙ ЯЩИК",
			"info": "ИССЛЕДУЕТСЯ: Содержимое черного ящика и поиск координат, откуда был атакован корабль экспедиции.",
			"order": 100,
			"researchTime": 180,
			"price": {
				"253": "30",
				"61": "250",
				"65": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 2582,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2590": {
			"id": 2590,
			"picture": "shr/d/technology_picture/129744_3_3255_132248_045.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ ПСИ-СИЛЫ ур.1",
			"info": "ИССЛЕДУЕТСЯ: Нанесение до 500 единиц урона и похищение до 165 здоровья в случае добивания противника пси-ударом.",
			"order": 100,
			"researchTime": 20,
			"price": {
				"253": "15",
				"244": "500",
				"65": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 2589,
						"choice": "ConditionItem"
					},
					"2": {
						"count": 5,
						"choice": "ConditionKillPsyShot"
					},
					"3": {
						"tech": 5192,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "PsyShot",
						"value": 500,
						"choice": "DiscoveryUpgrade"
					},
					"2": {
						"upgradeType": "NewUsePriceCount",
						"value": 29,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2683": {
			"id": 2683,
			"picture": "shr/d/technology_picture/129994_3_3255_113014_046.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ ГРАНАТОМЕТА ур.2",
			"info": "ИССЛЕДУЕТСЯ: Увеличение мощности ГРАНАТОМЕТА на 20%.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"253": "25",
				"244": "600",
				"64": "600"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2178,
						"count": 35,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2682,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 2382,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "GrenadeLauncherDamage",
						"value": 20,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2684": {
			"id": 2684,
			"picture": "shr/d/technology_picture/130142_3_3255_131418_061.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ СТАЗИСА АВТОМАТА ур.1",
			"info": "ИССЛЕДУЕТСЯ: Увеличение длительности эффекта СТАЗИСНОГО ВЫСТРЕЛА на 15%.",
			"order": 0,
			"researchTime": 45,
			"price": {
				"253": "20",
				"244": "250",
				"64": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2176,
						"count": 25,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2680,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 3086,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "StasisShotDuration",
						"value": 15,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2685": {
			"id": 2685,
			"picture": "shr/d/technology_picture/130142_3_3255_131418_061.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ СТАЗИСА АВТОМАТА ур.2",
			"info": "ИССЛЕДУЕТСЯ: Увеличение длительности эффекта СТАЗИСНОГО ВЫСТРЕЛА на 30%.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"253": "25",
				"244": "500",
				"64": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2176,
						"count": 35,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2681,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 2684,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "StasisShotDuration",
						"value": 30,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"2815": {
			"id": 2815,
			"picture": "shr/d/technology_picture/117262_3_3255_143218_008.png?ux=1442497198",
			"title": "ДОБЫЧА МАГМАТИТА",
			"info": "ИССЛЕДУЕТСЯ: Возможность построить шахту для добычи магматита.",
			"order": 20,
			"researchTime": 0.2,
			"price": {
				"253": "1",
				"61": "20",
				"65": "20"
			},
			"conditions": {
				"conditions": {
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 636,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3068": {
			"id": 3068,
			"picture": "shr/d/technology_picture/131357_3_15_124141_turret_2.png?ux=1442497198",
			"title": "ТУРЕЛЬ \"ГЕФЕСТ\"",
			"info": "ИССЛЕДУЕТСЯ: Улучшение защиты базы на 250.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"253": "20",
				"244": "400",
				"65": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 3865,
						"count": 4,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 3067,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 2254,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 1890,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3074": {
			"id": 3074,
			"picture": "shr/d/technology_picture/111563_3_3255_152937_e_g1l.png?ux=1442497198",
			"title": "ОСКОЛОЧНАЯ ГРАНАТА G-3",
			"info": "ИССЛЕДУЕТСЯ: Возможность производить осколочную гранату G-3.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"253": "30",
				"61": "500",
				"244": "900"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 405,
						"count": 16,
						"choice": "ConditionUseAbility"
					},
					"2": {
						"item": 3075,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 3073,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3085": {
			"id": 3085,
			"picture": "shr/d/technology_picture/129994_3_3255_113014_046.png?ux=1442497198",
			"title": "ГРАНАТОМЕТ ДЛЯ ДРОБОВИКА",
			"info": "ИССЛЕДУЕТСЯ: Оборудование всех дробовиков подствольным гранатометом.",
			"order": 0,
			"researchTime": 20,
			"price": {
				"253": "15",
				"61": "600",
				"64": "600"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2178,
						"count": 15,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 3083,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "GrenadeLauncherDamage",
						"value": 1,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3086": {
			"id": 3086,
			"picture": "shr/d/technology_picture/130142_3_3255_131418_061.png?ux=1442497198",
			"title": "СТАЗИС ДЛЯ АВТОМАТА",
			"info": "ИССЛЕДУЕТСЯ: Оборудование всех автоматов стазис-блоком для замедления противников в бою.",
			"order": 0,
			"researchTime": 20,
			"price": {
				"253": "15",
				"61": "400",
				"64": "400"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2176,
						"count": 15,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 3084,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "StasisShotDuration",
						"value": 1,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3112": {
			"id": 3112,
			"picture": "shr/d/technology_picture/129744_3_3255_132248_045.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ ПСИ-СИЛЫ ур.2",
			"info": "ИССЛЕДУЕТСЯ: Нанесение до 650 единиц урона и похищение до 215 здоровья в случае добивания противника пси-ударом.",
			"order": 100,
			"researchTime": 45,
			"price": {
				"253": "20",
				"244": "700",
				"65": "700"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 3113,
						"choice": "ConditionItem"
					},
					"2": {
						"count": 10,
						"choice": "ConditionKillPsyShot"
					},
					"3": {
						"tech": 2590,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "PsyShot",
						"value": 650,
						"choice": "DiscoveryUpgrade"
					},
					"2": {
						"upgradeType": "NewUsePriceCount",
						"value": 33,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3119": {
			"id": 3119,
			"picture": "shr/d/technology_picture/124330_3_3255_175119_042.png?ux=1442497198",
			"title": "КОМПЛЕКТ МЕДПАКОВ U-1",
			"info": "ИССЛЕДУЕТСЯ: Снижение цены на 30% при производстве медпаков U-1.",
			"order": 0,
			"researchTime": 15,
			"price": {
				"62": "100"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 3118,
						"choice": "ConditionItem"
					},
					"2": {
						"item": 71,
						"count": 10,
						"choice": "ConditionUseAbility"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 3120,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3123": {
			"id": 3123,
			"picture": "shr/d/technology_picture/124330_3_3255_175119_041.png?ux=1442497198",
			"title": "КОМПЛЕКТ ОСКОЛОЧНЫХ G-1",
			"info": "ИССЛЕДУЕТСЯ: Снижение цены на 30% при производстве осколочных гранат G-1.",
			"order": 0,
			"researchTime": 15,
			"price": {
				"62": "100"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 3117,
						"choice": "ConditionItem"
					},
					"2": {
						"item": 403,
						"count": 10,
						"choice": "ConditionUseAbility"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 3122,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3236": {
			"id": 3236,
			"picture": "shr/d/technology_picture/132871_3_3255_180344_069.png?ux=1442497198",
			"title": "КОМПЛЕКТ МЕДПАКОВ U-3",
			"info": "ИССЛЕДУЕТСЯ: Снижение цены на 30% при производстве медпаков U-3.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"62": "700"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 3235,
						"choice": "ConditionItem"
					},
					"2": {
						"item": 371,
						"count": 10,
						"choice": "ConditionUseAbility"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 3219,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3237": {
			"id": 3237,
			"picture": "shr/d/technology_picture/132871_3_3255_162540_068.png?ux=1442497198",
			"title": "КОМПЛЕКТ ОСКОЛОЧНЫХ G-3",
			"info": "ИССЛЕДУЕТСЯ: Снижение цены на 30% при производстве осколочных гранат G-3.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"62": "750"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 3234,
						"choice": "ConditionItem"
					},
					"2": {
						"item": 3073,
						"count": 8,
						"choice": "ConditionUseAbility"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 3217,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3239": {
			"id": 3239,
			"picture": "shr/d/technology_picture/129587_3_3255_115913_044.png?ux=1442497198",
			"title": "УЛУЧШЕННАЯ ОПТИКА ур.3",
			"info": "ИССЛЕДУЕТСЯ: Увеличение мощности ПРИЦЕЛЬНОГО ВЫСТРЕЛА на 15%.",
			"order": 0,
			"researchTime": 90,
			"price": {
				"253": "30",
				"244": "1000",
				"65": "1000"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 30,
						"choice": "ConditionKillSniperShot"
					},
					"2": {
						"item": 3238,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 2257,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "SnipeShotDamage",
						"value": 15,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3240": {
			"id": 3240,
			"picture": "shr/d/technology_picture/124077_3_3255_173652_039.png?ux=1442497198",
			"title": "ПИСТОЛЕТ \"КОБРА\"",
			"info": "ИССЛЕДУЕТСЯ: Пистолет, способный наносить [ECE9DE]56[-]/[FE7E0D]91[-] урона.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"253": "30",
				"61": "300",
				"65": "600"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2376,
						"count": 10,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2272,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 1448,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3334": {
			"id": 3334,
			"picture": "shr/d/technology_picture/124876_3_3255_135123_040.png?ux=1442497198",
			"title": "СТАЗИСНАЯ ЗАЩИТА ур.2",
			"info": "ИССЛЕДУЕТСЯ: Увеличение длительности стазисной защиты на 30%.",
			"order": 0,
			"researchTime": 90,
			"price": {
				"253": "25",
				"244": "450",
				"64": "900"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 5,
						"choice": "ConditionKillDominator"
					},
					"2": {
						"item": 3335,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 2247,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "StasisPreDeathDuration",
						"value": 30,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3376": {
			"id": 3376,
			"picture": "shr/d/technology_picture/001_124876_3_3255_040.png?ux=1442497198",
			"title": "РАСПАД АНОМАЛИЙ ур.3",
			"info": "ИССЛЕДУЕТСЯ: Возможность получать при распаде аномалий кристаллит с большой вероятностью.",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "20",
				"244": "500",
				"65": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 50,
						"choice": "ConditionAnomaly"
					},
					"2": {
						"tech": 2250,
						"choice": "ConditionTech"
					},
					"3": {
						"item": 3374,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"drop": 3372,
						"choice": "DiscoveryAnomalyDrop"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3377": {
			"id": 3377,
			"picture": "shr/d/technology_picture/001_124876_3_3255_040.png?ux=1442497198",
			"title": "РАСПАД АНОМАЛИЙ ур.4",
			"info": "ИССЛЕДУЕТСЯ: Возможность получать при распаде аномалий 4 ресурса вместо 3.",
			"order": 100,
			"researchTime": 60,
			"price": {
				"253": "30",
				"244": "800",
				"65": "800"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 100,
						"choice": "ConditionAnomaly"
					},
					"2": {
						"tech": 3376,
						"choice": "ConditionTech"
					},
					"3": {
						"item": 3375,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"drop": 3373,
						"choice": "DiscoveryAnomalyDrop"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3395": {
			"id": 3395,
			"picture": "shr/d/technology_picture/132788_3_3255_135341_064.png?ux=1442497198",
			"title": "КОМПЛЕКТ ДЛЯ АВТОМАТА",
			"info": "ИССЛЕДУЕТСЯ: Снижение цены на 30% при производстве патронов для автомата.",
			"order": 0,
			"researchTime": 40,
			"price": {
				"62": "400"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 3396,
						"choice": "ConditionItem"
					},
					"2": {
						"tag": 2376,
						"count": 10,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 3397,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3470": {
			"id": 3470,
			"picture": "shr/d/technology_picture/129994_3_3255_113014_046.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ ГРАНАТОМЕТА ур.3",
			"info": "ИССЛЕДУЕТСЯ: Увеличение мощности ГРАНАТОМЕТА на 30%.",
			"order": 0,
			"researchTime": 90,
			"price": {
				"253": "30",
				"244": "1100",
				"64": "1100"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 3864,
						"count": 10,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 3469,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 2683,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "GrenadeLauncherDamage",
						"value": 30,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3474": {
			"id": 3474,
			"picture": "shr/d/technology_picture/132788_3_3255_135342_065.png?ux=1442497198",
			"title": "КОМПЛЕКТ ДЛЯ ДРОБОВИКА",
			"info": "ИССЛЕДУЕТСЯ: Снижение цены на 30% при производстве патронов для дробовика.",
			"order": 0,
			"researchTime": 45,
			"price": {
				"62": "400"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 3473,
						"choice": "ConditionItem"
					},
					"2": {
						"tag": 3864,
						"count": 10,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 3221,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3552": {
			"id": 3552,
			"picture": "shr/d/technology_picture/001_124876_3_3255_040.png?ux=1442497198",
			"title": "РАСПАД АНОМАЛИЙ ур.5",
			"info": "ИССЛЕДУЕТСЯ: Возможность получать при распаде аномалий самоцветы с небольшой вероятностью.",
			"order": 100,
			"researchTime": 90,
			"price": {
				"253": "40",
				"244": "1000",
				"65": "1000"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 200,
						"choice": "ConditionAnomaly"
					},
					"2": {
						"tech": 3377,
						"choice": "ConditionTech"
					},
					"3": {
						"item": 3553,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"drop": 3551,
						"choice": "DiscoveryAnomalyDrop"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3559": {
			"id": 3559,
			"picture": "shr/d/technology_picture/124853_3_3255_151304_047.png?ux=1442497198",
			"title": "АВТОМАТ \"ШТОРМ\"",
			"info": "ИССЛЕДУЕТСЯ: Автомат, способный наносить [ECE9DE]96[-]/[FE7E0D]161[-] урона.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"253": "30",
				"61": "300",
				"64": "700"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2176,
						"count": 30,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2269,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 1590,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3658": {
			"id": 3658,
			"picture": "shr/d/technology_picture/127816_3_15_172817_cosmo_2_n.png?ux=1442497198",
			"title": "КОСТЮМ ПРОМЕТЕЙ",
			"info": "ИССЛЕДУЕТСЯ: Костюм со степенью защиты [ECE9DE]1800[-].",
			"order": 0,
			"researchTime": 120,
			"price": {
				"253": "35",
				"61": "450",
				"65": "800"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2158,
						"count": 12,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 3657,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 2074,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3662": {
			"id": 3662,
			"picture": "shr/d/technology_picture/114766_3_3181_113542_gm2_03.png?ux=1442497198",
			"title": "МЕДПАК U-2",
			"info": "ИССЛЕДУЕТСЯ: Улучшенный медпак, который восстанавливает в бою 35% здоровья.",
			"order": 0,
			"researchTime": 40,
			"price": {
				"253": "20",
				"61": "200",
				"65": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 71,
						"count": 15,
						"choice": "ConditionUseAbility"
					},
					"2": {
						"item": 3660,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 372,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3663": {
			"id": 3663,
			"picture": "shr/d/technology_picture/134786_3_3255_180619_070.png?ux=1442497198",
			"title": "КОМПЛЕКТ МЕДПАКОВ U-2",
			"info": "ИССЛЕДУЕТСЯ: Снижение цены на 30% при производстве медпаков U-2.",
			"order": 0,
			"researchTime": 30,
			"price": {
				"62": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 3661,
						"choice": "ConditionItem"
					},
					"2": {
						"item": 372,
						"count": 10,
						"choice": "ConditionUseAbility"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 3659,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3667": {
			"id": 3667,
			"picture": "shr/d/technology_picture/111563_3_3255_152940_e_g3l.png?ux=1442497198",
			"title": "ОСКОЛОЧНАЯ ГРАНАТА G-2",
			"info": "ИССЛЕДУЕТСЯ: Возможность производить осколочную гранату G-2.",
			"order": 0,
			"researchTime": 40,
			"price": {
				"253": "20",
				"61": "200",
				"64": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 403,
						"count": 10,
						"choice": "ConditionUseAbility"
					},
					"2": {
						"item": 3666,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 405,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3668": {
			"id": 3668,
			"picture": "shr/d/technology_picture/134786_3_3255_180619_071.png?ux=1442497198",
			"title": "КОМПЛЕКТ ОСКОЛОЧНЫХ G-2",
			"info": "ИССЛЕДУЕТСЯ: Снижение цены на 30% при производстве осколочных гранат G-2.",
			"order": 0,
			"researchTime": 20,
			"price": {
				"62": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 3665,
						"choice": "ConditionItem"
					},
					"2": {
						"item": 405,
						"count": 10,
						"choice": "ConditionUseAbility"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 3664,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3718": {
			"id": 3718,
			"picture": "shr/d/technology_picture/135305_3_3255_115055_075.png?ux=1442497198",
			"title": "РЕГЕНЕРАЦИЯ ур.1",
			"info": "ИССЛЕДУЕТСЯ: После боя здоровье восстанавливается со скоростью 120 в минуту.",
			"order": 100,
			"researchTime": 10,
			"price": {
				"253": "10",
				"64": "500",
				"61": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 4197,
						"count": 30,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 3717,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "RegenerationSpeedPercent",
						"value": 20,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"3844": {
			"id": 3844,
			"picture": "shr/d/technology_picture/135305_3_3255_115055_075.png?ux=1442497198",
			"title": "РЕГЕНЕРАЦИЯ ур.2",
			"info": "ИССЛЕДУЕТСЯ: После боя здоровье восстанавливается со скоростью 150 в минуту.",
			"order": 100,
			"researchTime": 20,
			"price": {
				"253": "15",
				"64": "500",
				"244": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2158,
						"count": 10,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 3843,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 3718,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "RegenerationSpeedPercent",
						"value": 50,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4244": {
			"id": 4244,
			"picture": "shr/d/technology_picture/125128_3_3255_184034_052.png?ux=1442497198",
			"title": "ДРОБОВИК \"КРИКУН\"",
			"info": "ИССЛЕДУЕТСЯ: Дробовик, способный наносить [ECE9DE]260[-]/[FE7E0D]440[-] урона.",
			"order": 0,
			"researchTime": 45,
			"price": {
				"253": "20",
				"61": "250",
				"64": "400"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 3864,
						"count": 8,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 4243,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 4241,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4589": {
			"id": 4589,
			"picture": "shr/d/technology_picture/125214_3_3255_155509_056.png?ux=1442497198",
			"title": "ПУЛЕМЕТ \"ДЖАГГЕРНАУТ\"",
			"info": "ИССЛЕДУЕТСЯ: Сверхскорострельный пулемет, способный наносить [ECE9DE]100[-]/[FE7E0D]170[-] урона.",
			"order": 900,
			"researchTime": 90,
			"price": {
				"253": "35",
				"61": "500",
				"65": "700"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 3865,
						"count": 5,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 4588,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 4578,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4590": {
			"id": 4590,
			"picture": "shr/d/technology_picture/139032_3_3255_151613_059.png?ux=1442497198",
			"title": "ДРОБОВИК \"ДРАКОН\"",
			"info": "ИССЛЕДУЕТСЯ: Дробовик с [CE0000]ЗАЖИГАТЕЛЬНЫМ[-] уроном [ECE9DE]520[-]/[FE7E0D]870[-].",
			"order": 0,
			"researchTime": 60,
			"price": {
				"253": "25",
				"61": "300",
				"64": "600"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 3864,
						"count": 10,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2279,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 4904,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4689": {
			"id": 4689,
			"picture": "shr/d/technology_picture/129744_3_3255_132248_045.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ ПСИ-СИЛЫ ур.3",
			"info": "ИССЛЕДУЕТСЯ: Нанесение до 800 единиц урона и похищение до 264 здоровья в случае добивания противника пси-ударом.",
			"order": 100,
			"researchTime": 60,
			"price": {
				"253": "20",
				"244": "900",
				"65": "900"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 4688,
						"choice": "ConditionItem"
					},
					"2": {
						"count": 15,
						"choice": "ConditionKillPsyShot"
					},
					"3": {
						"tech": 3112,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "PsyShot",
						"value": 800,
						"choice": "DiscoveryUpgrade"
					},
					"2": {
						"upgradeType": "NewUsePriceCount",
						"value": 37,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4692": {
			"id": 4692,
			"picture": "shr/d/technology_picture/129587_3_3255_115913_044.png?ux=1442497198",
			"title": "УЛУЧШЕННАЯ ОПТИКА ур.4",
			"info": "ИССЛЕДУЕТСЯ: Увеличение мощности ПРИЦЕЛЬНОГО ВЫСТРЕЛА на 20%.",
			"order": 0,
			"researchTime": 120,
			"price": {
				"253": "35",
				"244": "1500",
				"65": "1500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2117,
						"count": 30,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 4691,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 3239,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "SnipeShotDamage",
						"value": 20,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4696": {
			"id": 4696,
			"picture": "shr/d/technology_picture/130142_3_3255_131418_061.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ СТАЗИСА АВТОМАТА ур.3",
			"info": "ИССЛЕДУЕТСЯ: Увеличение длительности эффекта СТАЗИСНОГО ВЫСТРЕЛА на 45%.",
			"order": 0,
			"researchTime": 90,
			"price": {
				"253": "30",
				"244": "900",
				"64": "900"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2376,
						"count": 7,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 4694,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 2685,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "StasisShotDuration",
						"value": 45,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4697": {
			"id": 4697,
			"picture": "shr/d/technology_picture/130142_3_3255_131418_061.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ СТАЗИСА АВТОМАТА ур.4",
			"info": "ИССЛЕДУЕТСЯ: Увеличение длительности эффекта СТАЗИСНОГО ВЫСТРЕЛА на 60%.",
			"order": 0,
			"researchTime": 120,
			"price": {
				"253": "35",
				"244": "1400",
				"64": "1400"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2177,
						"count": 10,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 4695,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 4696,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "StasisShotDuration",
						"value": 60,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4702": {
			"id": 4702,
			"picture": "shr/d/technology_picture/135305_3_3255_115055_075.png?ux=1442497198",
			"title": "РЕГЕНЕРАЦИЯ ур.3",
			"info": "ИССЛЕДУЕТСЯ: После боя здоровье восстанавливается со скоростью 180 в минуту.",
			"order": 100,
			"researchTime": 45,
			"price": {
				"253": "20",
				"64": "700",
				"244": "700"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 4198,
						"count": 12,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 4700,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 3844,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "RegenerationSpeedPercent",
						"value": 80,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4703": {
			"id": 4703,
			"picture": "shr/d/technology_picture/135305_3_3255_115055_075.png?ux=1442497198",
			"title": "РЕГЕНЕРАЦИЯ ур.4",
			"info": "ИССЛЕДУЕТСЯ: После боя здоровье восстанавливается со скоростью 215 в минуту.",
			"order": 100,
			"researchTime": 60,
			"price": {
				"253": "25",
				"64": "900",
				"244": "900"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 3864,
						"count": 10,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 4701,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 4702,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "RegenerationSpeedPercent",
						"value": 115,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4710": {
			"id": 4710,
			"picture": "shr/d/technology_picture/135305_3_3255_115055_075.png?ux=1442497198",
			"title": "РЕГЕНЕРАЦИЯ ур.5",
			"info": "ИССЛЕДУЕТСЯ: После боя здоровье восстанавливается со скоростью 260 в минуту.",
			"order": 100,
			"researchTime": 90,
			"price": {
				"253": "30",
				"64": "1100",
				"244": "1100"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2177,
						"count": 5,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 4706,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 4703,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "RegenerationSpeedPercent",
						"value": 160,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4711": {
			"id": 4711,
			"picture": "shr/d/technology_picture/135305_3_3255_115055_075.png?ux=1442497198",
			"title": "РЕГЕНЕРАЦИЯ ур.6",
			"info": "ИССЛЕДУЕТСЯ: После боя здоровье восстанавливается со скоростью 315 в минуту.",
			"order": 100,
			"researchTime": 120,
			"price": {
				"253": "35",
				"64": "1300",
				"244": "1300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 4684,
						"count": 15,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 4707,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 4710,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "RegenerationSpeedPercent",
						"value": 215,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4712": {
			"id": 4712,
			"picture": "shr/d/technology_picture/135305_3_3255_115055_075.png?ux=1442497198",
			"title": "РЕГЕНЕРАЦИЯ ур.7",
			"info": "ИССЛЕДУЕТСЯ: После боя здоровье восстанавливается со скоростью 380 в минуту.",
			"order": 100,
			"researchTime": 120,
			"price": {
				"253": "40",
				"64": "1500",
				"244": "1500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2376,
						"count": 7,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 4708,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 4711,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "RegenerationSpeedPercent",
						"value": 280,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4713": {
			"id": 4713,
			"picture": "shr/d/technology_picture/135305_3_3255_115055_075.png?ux=1442497198",
			"title": "РЕГЕНЕРАЦИЯ ур.8",
			"info": "ИССЛЕДУЕТСЯ: После боя здоровье восстанавливается со скоростью 455 в минуту.",
			"order": 100,
			"researchTime": 150,
			"price": {
				"253": "40",
				"64": "1700",
				"244": "1700"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 3865,
						"count": 5,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 4709,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 4712,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "RegenerationSpeedPercent",
						"value": 355,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4722": {
			"id": 4722,
			"picture": "shr/d/technology_picture/129744_3_3255_132248_045.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ ПСИ-СИЛЫ ур.4",
			"info": "ИССЛЕДУЕТСЯ: Нанесение до 1000 единиц урона и похищение до 333 здоровья в случае добивания противника пси-ударом.",
			"order": 100,
			"researchTime": 90,
			"price": {
				"253": "25",
				"244": "1100",
				"65": "1100"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 4718,
						"choice": "ConditionItem"
					},
					"2": {
						"count": 20,
						"choice": "ConditionKillPsyShot"
					},
					"3": {
						"tech": 4689,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "PsyShot",
						"value": 1000,
						"choice": "DiscoveryUpgrade"
					},
					"2": {
						"upgradeType": "NewUsePriceCount",
						"value": 41,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4723": {
			"id": 4723,
			"picture": "shr/d/technology_picture/129744_3_3255_132248_045.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ ПСИ-СИЛЫ ур.5",
			"info": "ИССЛЕДУЕТСЯ: Нанесение до 1300 единиц урона и похищение до 429 здоровья в случае добивания противника пси-ударом.",
			"order": 100,
			"researchTime": 120,
			"price": {
				"253": "30",
				"244": "1300",
				"65": "1300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 4719,
						"choice": "ConditionItem"
					},
					"2": {
						"count": 20,
						"choice": "ConditionKillPsyShot"
					},
					"3": {
						"tech": 4722,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "PsyShot",
						"value": 1300,
						"choice": "DiscoveryUpgrade"
					},
					"2": {
						"upgradeType": "NewUsePriceCount",
						"value": 45,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4724": {
			"id": 4724,
			"picture": "shr/d/technology_picture/129744_3_3255_132248_045.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ ПСИ-СИЛЫ ур.6",
			"info": "ИССЛЕДУЕТСЯ: Нанесение до 1600 единиц урона и похищение до 528 здоровья в случае добивания противника пси-ударом.",
			"order": 100,
			"researchTime": 120,
			"price": {
				"253": "35",
				"244": "1500",
				"65": "1500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 4720,
						"choice": "ConditionItem"
					},
					"2": {
						"count": 20,
						"choice": "ConditionKillPsyShot"
					},
					"3": {
						"tech": 4723,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "PsyShot",
						"value": 1600,
						"choice": "DiscoveryUpgrade"
					},
					"2": {
						"upgradeType": "NewUsePriceCount",
						"value": 49,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4725": {
			"id": 4725,
			"picture": "shr/d/technology_picture/129744_3_3255_132248_045.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ ПСИ-СИЛЫ ур.7",
			"info": "ИССЛЕДУЕТСЯ: Нанесение до 2000 единиц урона и похищение до 660 здоровья в случае добивания противника пси-ударом.",
			"order": 100,
			"researchTime": 120,
			"price": {
				"253": "35",
				"244": "1700",
				"65": "1700"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 4721,
						"choice": "ConditionItem"
					},
					"2": {
						"count": 20,
						"choice": "ConditionKillPsyShot"
					},
					"3": {
						"tech": 4724,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "PsyShot",
						"value": 2000,
						"choice": "DiscoveryUpgrade"
					},
					"2": {
						"upgradeType": "NewUsePriceCount",
						"value": 53,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4733": {
			"id": 4733,
			"picture": "shr/d/technology_picture/129994_3_3255_113014_046.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ ГРАНАТОМЕТА ур.4",
			"info": "ИССЛЕДУЕТСЯ: Увеличение мощности ГРАНАТОМЕТА на 40%.",
			"order": 0,
			"researchTime": 120,
			"price": {
				"253": "35",
				"244": "1500",
				"64": "1500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 3864,
						"count": 20,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 4731,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 3470,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "GrenadeLauncherDamage",
						"value": 40,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4762": {
			"id": 4762,
			"picture": "shr/d/technology_picture/135952_3_7_133500_commander_center_on_c.png?ux=1442497198",
			"title": "БАЗА СНАБЖЕНИЯ",
			"info": "ИССЛЕДУЕТСЯ: Возможность построить Базу снабжения, которая позволит получать бесплатные ресурсы несколько раз в день.",
			"order": 0,
			"researchTime": 45,
			"price": {
				"253": "15",
				"61": "150",
				"65": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 2,
						"choice": "ConditionPuzzle"
					},
					"2": {
						"item": 4761,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 3837,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4919": {
			"id": 4919,
			"picture": "shr/d/technology_picture/136916_3_3255_141917_083.png?ux=1442497198",
			"title": "КИСЛОТНАЯ ГРАНАТА G-1",
			"info": "ИССЛЕДУЕТСЯ: Возможность производить [00FF00]кислотную[-] гранату G-1.",
			"order": 0,
			"researchTime": 45,
			"price": {
				"253": "25",
				"244": "400",
				"64": "800"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 405,
						"count": 10,
						"choice": "ConditionUseAbility"
					},
					"2": {
						"item": 4917,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 4239,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"4920": {
			"id": 4920,
			"picture": "shr/d/technology_picture/138827_3_3255_131330_087.png?ux=1442497198",
			"title": "КОМПЛЕКТ КИСЛОТНЫХ G-1",
			"info": "ИССЛЕДУЕТСЯ: Снижение цены на 30% при производстве [00FF00]кислотных[-] гранат G-1.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"62": "350"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 4918,
						"choice": "ConditionItem"
					},
					"2": {
						"item": 4239,
						"count": 10,
						"choice": "ConditionUseAbility"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 4921,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5192": {
			"id": 5192,
			"picture": "shr/d/technology_picture/129744_3_3255_132248_045.png?ux=1442497198",
			"title": "ПСИ-СИЛА",
			"info": "ИССЛЕДУЕТСЯ: Пси-сила, которая позволит управлять установкой \"ФЕНИКС\" и использовать в бою новые возможности.",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "15",
				"244": "100",
				"65": "350"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 5193,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "PsyShot",
						"value": 350,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5203": {
			"id": 5203,
			"picture": "shr/d/technology_picture/139728_3_3255_122004_061.png?ux=1442497198",
			"title": "КИСЛОТНЫЙ ПИСТОЛЕТ",
			"info": "ИССЛЕДУЕТСЯ: Пистолет, способный наносить [ECE9DE]28[-]/[FE7E0D]48[-] [00FF00]КИСЛОТНОГО[-] урона.",
			"order": 0,
			"researchTime": 30,
			"price": {
				"253": "20",
				"65": "400",
				"244": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 5204,
						"count": 20,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 5202,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 5200,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5210": {
			"id": 5210,
			"picture": "shr/d/technology_picture/132737_3_3255_132511_ava32_2.png?ux=1442497198",
			"title": "ТУРЕЛЬ \"ГИДРА\"",
			"info": "ИССЛЕДУЕТСЯ: Улучшение защиты базы на 350.",
			"order": 0,
			"researchTime": 120,
			"price": {
				"253": "30",
				"244": "700",
				"65": "800"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 3865,
						"count": 5,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 5208,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 3068,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 5205,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5303": {
			"id": 5303,
			"picture": "shr/d/technology_picture/137577_3_15_130507_e_it_1.png?ux=1442497198",
			"title": "ЗАЖИГАТЕЛЬНАЯ ГРАНАТА G-1",
			"info": "ИССЛЕДУЕТСЯ: Возможность производить [CE0000]зажигательную[-] гранату G-1.",
			"order": 0,
			"researchTime": 45,
			"price": {
				"253": "25",
				"244": "400",
				"64": "800"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 405,
						"count": 10,
						"choice": "ConditionUseAbility"
					},
					"2": {
						"item": 5304,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 4591,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5336": {
			"id": 5336,
			"picture": "shr/d/technology_picture/139722_3_3255_183701_089.png?ux=1442497198",
			"title": "РАДАР",
			"info": "ИССЛЕДУЕТСЯ: Радар, который улучшит эффективность турелей при защите вашей базы от нападений других игроков.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"253": "20",
				"244": "500",
				"64": "500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 4591,
						"count": 8,
						"choice": "ConditionUseAbility"
					},
					"2": {
						"item": 5306,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 5335,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5354": {
			"id": 5354,
			"picture": "shr/d/technology_picture/attackstyle.png?ux=1442497198",
			"title": "АТАКУЮЩИЙ РЕЖИМ БОЯ",
			"info": "ИССЛЕДУЕТСЯ: Специальный режим боя, в котором вы повышаете свой урон, но ослабляете защиту.",
			"order": 100,
			"researchTime": 20,
			"price": {
				"253": "20",
				"244": "300",
				"65": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 5334,
						"choice": "ConditionItem"
					},
					"2": {
						"count": 15,
						"choice": "ConditionWinBattle"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"damageReceivePercent": 130,
						"damageAttackPercent": 110,
						"choice": "DiscoveryBattleStyleAttack"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5367": {
			"id": 5367,
			"picture": "shr/d/technology_picture/139531_3_3255_120039_088.png?ux=1442497198",
			"title": "КОМПЛЕКТ ЗАЖИГАТЕЛЬНЫХ G-1",
			"info": "ИССЛЕДУЕТСЯ: Снижение цены на 30% при производстве [CE0000]зажигательных[-] гранат G-1.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"62": "350"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 5366,
						"choice": "ConditionItem"
					},
					"2": {
						"item": 4591,
						"count": 10,
						"choice": "ConditionUseAbility"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 5305,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5453": {
			"id": 5453,
			"picture": "shr/d/technology_picture/attackstyle.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ АТАКИ ур.1",
			"info": "ИССЛЕДУЕТСЯ: Увеличение бонуса атаки в атакующем режиме с 10% до 15%.",
			"order": 100,
			"researchTime": 60,
			"price": {
				"253": "30",
				"244": "800",
				"65": "800"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 5452,
						"choice": "ConditionItem"
					},
					"2": {
						"count": 25,
						"choice": "ConditionWinBattle"
					},
					"3": {
						"tech": 5354,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"damageReceivePercent": 130,
						"damageAttackPercent": 115,
						"choice": "DiscoveryBattleStyleAttack"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5598": {
			"id": 5598,
			"picture": "shr/d/technology_picture/141123_3_3255_155749_062.png?ux=1442497198",
			"title": "ПИСТОЛЕТ \"ПЕГАС\"",
			"info": "ИССЛЕДУЕТСЯ: Пистолет, способный наносить [ECE9DE]112[-]/[FE7E0D]187[-] урона.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"253": "35",
				"61": "400",
				"65": "800"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2117,
						"count": 10,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 5599,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 5579,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5601": {
			"id": 5601,
			"picture": "shr/d/technology_picture/139503_3_3255_121303_s28_1.png?ux=1442497198",
			"title": "КОСТЮМ СПАРТАНЦА",
			"info": "ИССЛЕДУЕТСЯ: Костюм со степенью защиты [ECE9DE]2500[-]. В PVP делает командора пуленепробиваемым.",
			"order": 0,
			"researchTime": 120,
			"price": {
				"253": "40",
				"61": "500",
				"65": "1000"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2158,
						"count": 12,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 5602,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 5574,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5629": {
			"id": 5629,
			"picture": "shr/d/technology_picture/139688_3_3255_173849_060.png?ux=1442497198",
			"title": "ИНОПЛАНЕТНЫЙ ПИСТОЛЕТ",
			"info": "ИССЛЕДУЕТСЯ: Пистолет, способный наносить [ECE9DE]155[-]/[FE7E0D]260[-] [68FFFE]ЭНЕРГЕТИЧЕСКОГО[-] урона.",
			"order": 0,
			"researchTime": 120,
			"price": {
				"253": "35",
				"65": "700",
				"244": "700"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 50,
						"choice": "ConditionAnomaly"
					},
					"2": {
						"item": 5630,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 5578,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5643": {
			"id": 5643,
			"picture": "shr/d/technology_picture/124853_3_3255_151307_048.png?ux=1442497198",
			"title": "АВТОМАТ \"АЛЛИГАТОР\"",
			"info": "ИССЛЕДУЕТСЯ: Автомат, способный наносить [ECE9DE]192[-]/[FE7E0D]317[-] урона.",
			"order": 0,
			"researchTime": 90,
			"price": {
				"253": "35",
				"61": "400",
				"64": "800"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2176,
						"count": 30,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 2271,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 1593,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5688": {
			"id": 5688,
			"picture": "shr/d/technology_picture/140677_3_15_122056_d_w.png?ux=1442497198",
			"title": "ПУЛЕМЕТ \"МОЛОХ\"",
			"info": "ИССЛЕДУЕТСЯ: Сверхскорострельный пулемет, способный наносить [ECE9DE]300[-]/[FE7E0D]510[-] урона.",
			"order": 900,
			"researchTime": 120,
			"price": {
				"253": "40",
				"61": "600",
				"65": "900"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2177,
						"count": 7,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 5687,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 5580,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5779": {
			"id": 5779,
			"picture": "shr/d/technology_picture/142567_3_3255_141813_067.png?ux=1442497198",
			"title": "ДРОБОВИК \"ЛЕГИОНЕР\"",
			"info": "ИССЛЕДУЕТСЯ: Дробовик, способный наносить [ECE9DE]1040[-]/[FE7E0D]1765[-] урона.",
			"order": 0,
			"researchTime": 90,
			"price": {
				"253": "30",
				"61": "400",
				"64": "800"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 2178,
						"count": 25,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 5778,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 1636,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5789": {
			"id": 5789,
			"picture": "shr/d/technology_picture/132737_3_3255_132518_ava33_2.png?ux=1442497198",
			"title": "ТУРЕЛЬ \"МАКСИМУС\"",
			"info": "ИССЛЕДУЕТСЯ: Улучшение защиты базы на 450.",
			"order": 0,
			"researchTime": 240,
			"price": {
				"253": "40",
				"244": "2000",
				"65": "2000"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 5674,
						"count": 6,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 5788,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 6320,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 5742,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5829": {
			"id": 5829,
			"picture": "shr/d/technology_picture/attackstyle.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ АТАКИ ур.2",
			"info": "ИССЛЕДУЕТСЯ: Увеличение бонуса атаки в атакующем режиме с 15% до 20%.",
			"order": 100,
			"researchTime": 90,
			"price": {
				"253": "35",
				"244": "1500",
				"65": "1500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 5828,
						"choice": "ConditionItem"
					},
					"2": {
						"count": 25,
						"choice": "ConditionWinBattle"
					},
					"3": {
						"tech": 5453,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"damageReceivePercent": 130,
						"damageAttackPercent": 120,
						"choice": "DiscoveryBattleStyleAttack"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"5913": {
			"id": 5913,
			"picture": "shr/d/technology_picture/142539_3_3255_181235_064.png?ux=1442497198",
			"title": "КИСЛОТНЫЙ ДРОБОВИК",
			"info": "ИССЛЕДУЕТСЯ: Дробовик с [00FF00]КИСЛОТНЫМ[-] уроном [ECE9DE]700[-]/[FE7E0D]1190[-].",
			"order": 0,
			"researchTime": 60,
			"price": {
				"253": "35",
				"4483": "2000"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 5204,
						"count": 30,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 5912,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 5203,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 5791,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"6035": {
			"id": 6035,
			"picture": "shr/d/technology_picture/142647_3_3255_140818_069.png?ux=1442497198",
			"title": "ПИСТОЛЕТ \"ДРАКОН\"",
			"info": "ИССЛЕДУЕТСЯ: Пистолет, способный наносить [ECE9DE]56[-]/[FE7E0D]91[-] [CE0000]ОГНЕННОГО[-] урона.",
			"order": 0,
			"researchTime": 30,
			"price": {
				"253": "30",
				"4483": "1500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 4199,
						"count": 20,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 6034,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 6032,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"6320": {
			"id": 6320,
			"picture": "shr/d/technology_picture/143668_3_3859_174619_turet_6_ava.png?ux=1442497198",
			"title": "ТУРЕЛЬ \"ЧЕРНАЯ ГИДРА\"",
			"info": "ИССЛЕДУЕТСЯ: Улучшение защиты базы на 400.",
			"order": 0,
			"researchTime": 120,
			"price": {
				"253": "35",
				"244": "1200",
				"65": "1200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 3865,
						"count": 5,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 6323,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 5210,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 6319,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"6469": {
			"id": 6469,
			"picture": "shr/d/technology_picture/129744_3_3255_132248_045.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ ПСИ-СИЛЫ ур.8",
			"info": "ИССЛЕДУЕТСЯ: Нанесение до 2550 единиц урона и похищение до 840 здоровья в случае добивания противника пси-ударом.",
			"order": 100,
			"researchTime": 120,
			"price": {
				"253": "35",
				"244": "2000",
				"65": "2000"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 6470,
						"choice": "ConditionItem"
					},
					"2": {
						"count": 25,
						"choice": "ConditionKillPsyShot"
					},
					"3": {
						"tech": 4725,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "PsyShot",
						"value": 2550,
						"choice": "DiscoveryUpgrade"
					},
					"2": {
						"upgradeType": "NewUsePriceCount",
						"value": 57,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"6473": {
			"id": 6473,
			"picture": "shr/d/technology_picture/129744_3_3255_132248_045.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ ПСИ-СИЛЫ ур.9",
			"info": "ИССЛЕДУЕТСЯ: Нанесение до 3300 единиц урона и похищение до 1090 здоровья в случае добивания противника пси-ударом.",
			"order": 100,
			"researchTime": 120,
			"price": {
				"253": "40",
				"244": "2200",
				"65": "2200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 6472,
						"choice": "ConditionItem"
					},
					"2": {
						"count": 25,
						"choice": "ConditionKillPsyShot"
					},
					"3": {
						"tech": 6469,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "PsyShot",
						"value": 3300,
						"choice": "DiscoveryUpgrade"
					},
					"2": {
						"upgradeType": "NewUsePriceCount",
						"value": 61,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"6780": {
			"id": 6780,
			"picture": "shr/d/technology_picture/132788_3_3255_181213_066.png?ux=1442497198",
			"title": "КОМПЛЕКТ ДЛЯ ПУЛЕМЕТА",
			"info": "ИССЛЕДУЕТСЯ: Снижение цены на 30% при производстве патронов для пулемета.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"62": "800"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 6779,
						"choice": "ConditionItem"
					},
					"2": {
						"tag": 2177,
						"count": 10,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 3222,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"6795": {
			"id": 6795,
			"picture": "shr/d/technology_picture/144020_3_3255_141704_009.png?ux=1442497198",
			"title": "КРИСТАЛИТНАЯ ШАХТА",
			"info": "ИССЛЕДУЕТСЯ: Возможность построить шахту для добычи кристаллита.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"253": "30",
				"244": "500",
				"64": "700"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 6796,
						"choice": "ConditionItem"
					},
					"2": {
						"count": 2,
						"choice": "ConditionTerraform"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 6783,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"6798": {
			"id": 6798,
			"picture": "shr/d/technology_picture/138552_3_3255_174216_s26_1.png?ux=1442497198",
			"title": "КОСТЮМ ИЗБРАННОГО КСИ",
			"info": "ИССЛЕДУЕТСЯ: Костюм со степенью защиты [ECE9DE]2500[-]. Дает одно бесплатное воскрешение в PVE и требует Пси-добивания в PVP.",
			"order": 0,
			"researchTime": 60,
			"price": {
				"253": "40",
				"61": "500",
				"244": "1000"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 6816,
						"count": 14,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 6799,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 5601,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 5141,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7137": {
			"id": 7137,
			"picture": "shr/d/technology_picture/116887_3_3181_182723_26_s_02.png?ux=1442497198",
			"title": "ПАУК",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "5",
				"4483": "100",
				"61": "100"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7124,
						"count": 75,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7183": {
			"id": 7183,
			"picture": "shr/d/technology_picture/116887_3_3181_182723_26_s_02.png?ux=1442497198",
			"title": "ПАУК ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "7",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7124,
						"count": 150,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7137,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7184": {
			"id": 7184,
			"picture": "shr/d/technology_picture/116887_3_3181_182723_26_s_02.png?ux=1442497198",
			"title": "ПАУК ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7124,
						"count": 375,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7183,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7186": {
			"id": 7186,
			"picture": "shr/d/technology_picture/136066_3_3255_163723_ava34_2.png?ux=1442497198",
			"title": "ПАУК-СОЛДАТ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "5",
				"4483": "100",
				"61": "100"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7138,
						"count": 50,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7187": {
			"id": 7187,
			"picture": "shr/d/technology_picture/136066_3_3255_163723_ava34_2.png?ux=1442497198",
			"title": "ПАУК-СОЛДАТ ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "7",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7138,
						"count": 100,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7186,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7188": {
			"id": 7188,
			"picture": "shr/d/technology_picture/136066_3_3255_163723_ava34_2.png?ux=1442497198",
			"title": "ПАУК-СОЛДАТ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7138,
						"count": 250,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7187,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7191": {
			"id": 7191,
			"picture": "shr/d/technology_picture/139265_3_434_101142_beetle_boss.png?ux=1442497198",
			"title": "ВЛАДЫКА",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7152,
						"count": 4,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7192": {
			"id": 7192,
			"picture": "shr/d/technology_picture/139265_3_434_101142_beetle_boss.png?ux=1442497198",
			"title": "ВЛАДЫКА ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7152,
						"count": 8,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7191,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7193": {
			"id": 7193,
			"picture": "shr/d/technology_picture/139265_3_434_101142_beetle_boss.png?ux=1442497198",
			"title": "ВЛАДЫКА ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7152,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7192,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7194": {
			"id": 7194,
			"picture": "shr/d/technology_picture/146232_3_3255_161757_ava65_2.png?ux=1442497198",
			"title": "ПАРАЗИТ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "5",
				"4483": "100",
				"61": "100"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7153,
						"count": 40,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7195": {
			"id": 7195,
			"picture": "shr/d/technology_picture/146232_3_3255_161757_ava65_2.png?ux=1442497198",
			"title": "ПАРАЗИТ ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "7",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7153,
						"count": 80,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7194,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7196": {
			"id": 7196,
			"picture": "shr/d/technology_picture/146232_3_3255_161757_ava65_2.png?ux=1442497198",
			"title": "ПАРАЗИТ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7153,
						"count": 200,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7195,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7197": {
			"id": 7197,
			"picture": "shr/d/technology_picture/116887_3_3181_182728_27_s_02.png?ux=1442497198",
			"title": "ПАУК-ГИГАНТ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7141,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7198": {
			"id": 7198,
			"picture": "shr/d/technology_picture/116887_3_3181_182728_27_s_02.png?ux=1442497198",
			"title": "ПАУК-ГИГАНТ ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7141,
						"count": 40,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7197,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7199": {
			"id": 7199,
			"picture": "shr/d/technology_picture/116887_3_3181_182728_27_s_02.png?ux=1442497198",
			"title": "ПАУК-ГИГАНТ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7141,
						"count": 100,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7198,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7200": {
			"id": 7200,
			"picture": "shr/d/technology_picture/136066_3_3255_163720_ava36_2.png?ux=1442497198",
			"title": "ПАУК-СТРАЖ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7139,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7201": {
			"id": 7201,
			"picture": "shr/d/technology_picture/136066_3_3255_163720_ava36_2.png?ux=1442497198",
			"title": "ПАУК-СТРАЖ ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7139,
						"count": 60,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7200,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7202": {
			"id": 7202,
			"picture": "shr/d/technology_picture/136066_3_3255_163720_ava36_2.png?ux=1442497198",
			"title": "ПАУК-СТРАЖ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7139,
						"count": 150,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7201,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7203": {
			"id": 7203,
			"picture": "shr/d/technology_picture/116887_3_3181_182718_25_s_02.png?ux=1442497198",
			"title": "ПАУЧИХА",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7142,
						"count": 10,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7204": {
			"id": 7204,
			"picture": "shr/d/technology_picture/116887_3_3181_182718_25_s_02.png?ux=1442497198",
			"title": "ПАУЧИХА ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7142,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7203,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7205": {
			"id": 7205,
			"picture": "shr/d/technology_picture/116887_3_3181_182718_25_s_02.png?ux=1442497198",
			"title": "ПАУЧИХА ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7142,
						"count": 40,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7204,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7206": {
			"id": 7206,
			"picture": "shr/d/technology_picture/118242_3_3255_154401_ava17_2.png?ux=1442497198",
			"title": "ПОЛЗУН",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "5",
				"4483": "100",
				"61": "100"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7143,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7207": {
			"id": 7207,
			"picture": "shr/d/technology_picture/118242_3_3255_154401_ava17_2.png?ux=1442497198",
			"title": "ПОЛЗУН ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "7",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7143,
						"count": 40,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7206,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7208": {
			"id": 7208,
			"picture": "shr/d/technology_picture/118242_3_3255_154401_ava17_2.png?ux=1442497198",
			"title": "ПОЛЗУН ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7143,
						"count": 100,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7207,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7209": {
			"id": 7209,
			"picture": "shr/d/technology_picture/118242_3_3255_161837_ava16_2.png?ux=1442497198",
			"title": "БЛЕКЛЫЙ ПОЛЗУН",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7144,
						"count": 15,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7210": {
			"id": 7210,
			"picture": "shr/d/technology_picture/118242_3_3255_161837_ava16_2.png?ux=1442497198",
			"title": "БЛЕКЛЫЙ ПОЛЗУН ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7144,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7209,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7211": {
			"id": 7211,
			"picture": "shr/d/technology_picture/118242_3_3255_161837_ava16_2.png?ux=1442497198",
			"title": "БЛЕКЛЫЙ ПОЛЗУН ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7144,
						"count": 75,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7210,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7212": {
			"id": 7212,
			"picture": "shr/d/technology_picture/118242_3_3255_161741_ava18_2.png?ux=1442497198",
			"title": "КРОВАВЫЙ ПОЛЗУН",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7145,
						"count": 10,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7213": {
			"id": 7213,
			"picture": "shr/d/technology_picture/118242_3_3255_161741_ava18_2.png?ux=1442497198",
			"title": "КРОВАВЫЙ ПОЛЗУН ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7145,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7212,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7214": {
			"id": 7214,
			"picture": "shr/d/technology_picture/118242_3_3255_161741_ava18_2.png?ux=1442497198",
			"title": "КРОВАВЫЙ ПОЛЗУН ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7145,
						"count": 40,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7213,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7215": {
			"id": 7215,
			"picture": "shr/d/technology_picture/136813_3_3255_104941_ava40_2.png?ux=1442497198",
			"title": "ОРОГОВЕЛЫЙ ПОЛЗУН",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7146,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7216": {
			"id": 7216,
			"picture": "shr/d/technology_picture/136813_3_3255_104941_ava40_2.png?ux=1442497198",
			"title": "ОРОГОВЕЛЫЙ ПОЛЗУН ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7146,
						"count": 40,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7215,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7217": {
			"id": 7217,
			"picture": "shr/d/technology_picture/136813_3_3255_104941_ava40_2.png?ux=1442497198",
			"title": "ОРОГОВЕЛЫЙ ПОЛЗУН ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7146,
						"count": 100,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7216,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7218": {
			"id": 7218,
			"picture": "shr/d/technology_picture/128892_3_3255_191655_ava30_2.png?ux=1442497198",
			"title": "БОМБЕР",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "5",
				"4483": "100",
				"61": "100"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7147,
						"count": 50,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7219": {
			"id": 7219,
			"picture": "shr/d/technology_picture/128892_3_3255_191655_ava30_2.png?ux=1442497198",
			"title": "БОМБЕР ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "7",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7147,
						"count": 100,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7218,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7220": {
			"id": 7220,
			"picture": "shr/d/technology_picture/128892_3_3255_191655_ava30_2.png?ux=1442497198",
			"title": "БОМБЕР ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7147,
						"count": 250,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7219,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7221": {
			"id": 7221,
			"picture": "shr/d/technology_picture/130121_3_3255_160646_ava31_2.png?ux=1442497198",
			"title": "ЕДКИЙ БОМБЕР",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "5",
				"4483": "100",
				"61": "100"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7148,
						"count": 50,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7222": {
			"id": 7222,
			"picture": "shr/d/technology_picture/130121_3_3255_160646_ava31_2.png?ux=1442497198",
			"title": "ЕДКИЙ БОМБЕР ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "7",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7148,
						"count": 100,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7221,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7223": {
			"id": 7223,
			"picture": "shr/d/technology_picture/130121_3_3255_160646_ava31_2.png?ux=1442497198",
			"title": "ЕДКИЙ БОМБЕР ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7148,
						"count": 250,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7222,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7224": {
			"id": 7224,
			"picture": "shr/d/technology_picture/136066_3_3255_163724_ava35_2.png?ux=1442497198",
			"title": "ПАУК-БЕРСЕРК",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7140,
						"count": 15,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7225": {
			"id": 7225,
			"picture": "shr/d/technology_picture/136066_3_3255_163724_ava35_2.png?ux=1442497198",
			"title": "ПАУК-БЕРСЕРК ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7140,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7224,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7226": {
			"id": 7226,
			"picture": "shr/d/technology_picture/136066_3_3255_163724_ava35_2.png?ux=1442497198",
			"title": "ПАУК-БЕРСЕРК ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7140,
						"count": 75,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7225,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7227": {
			"id": 7227,
			"picture": "shr/d/technology_picture/112889_3_3181_171804_15_s_02.png?ux=1442497198",
			"title": "КУЛЬТИСТ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7150,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7228": {
			"id": 7228,
			"picture": "shr/d/technology_picture/112889_3_3181_171804_15_s_02.png?ux=1442497198",
			"title": "КУЛЬТИСТ ур.2",
			"order": 100,
			"researchTime": 7,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7150,
						"count": 40,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7227,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7229": {
			"id": 7229,
			"picture": "shr/d/technology_picture/112889_3_3181_171804_15_s_02.png?ux=1442497198",
			"title": "КУЛЬТИСТ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7150,
						"count": 100,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7228,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7230": {
			"id": 7230,
			"picture": "shr/d/technology_picture/144079_3_3255_182228_ava62_2.png?ux=1442497198",
			"title": "ИЗБРАННЫЙ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7151,
						"count": 7,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7231": {
			"id": 7231,
			"picture": "shr/d/technology_picture/144079_3_3255_182228_ava62_2.png?ux=1442497198",
			"title": "ИЗБРАННЫЙ ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7151,
						"count": 14,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7230,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7232": {
			"id": 7232,
			"picture": "shr/d/technology_picture/144079_3_3255_182228_ava62_2.png?ux=1442497198",
			"title": "ИЗБРАННЫЙ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7151,
						"count": 35,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7231,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7233": {
			"id": 7233,
			"picture": "shr/d/technology_picture/143399_3_3255_165333_ava59_2.png?ux=1442497198",
			"title": "КОРОЛЕВА",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7149,
						"count": 5,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7234": {
			"id": 7234,
			"picture": "shr/d/technology_picture/143399_3_3255_165333_ava59_2.png?ux=1442497198",
			"title": "КОРОЛЕВА ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7149,
						"count": 10,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7233,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7235": {
			"id": 7235,
			"picture": "shr/d/technology_picture/143399_3_3255_165333_ava59_2.png?ux=1442497198",
			"title": "КОРОЛЕВА ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7149,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7234,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7253": {
			"id": 7253,
			"picture": "shr/d/technology_picture/145335_3_434_154555_locator_on.png?ux=1442497198",
			"title": "ШТАБ РАЗВЕДКИ",
			"info": "ИССЛЕДУЕТСЯ: Возможность построить Штаб разведки, где анализируются уязвимости врагов.",
			"order": 0,
			"researchTime": 45,
			"price": {
				"253": "15",
				"61": "200",
				"65": "400"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 4197,
						"count": 30,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 7254,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 7125,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7292": {
			"id": 7292,
			"picture": "shr/d/technology_picture/125573_3_3255_181540_ava28_2.png?ux=1442497198",
			"title": "СНАЙПЕР",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7154,
						"count": 15,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7293": {
			"id": 7293,
			"picture": "shr/d/technology_picture/125573_3_3255_181540_ava28_2.png?ux=1442497198",
			"title": "СНАЙПЕР ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7154,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7292,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7294": {
			"id": 7294,
			"picture": "shr/d/technology_picture/125573_3_3255_181540_ava28_2.png?ux=1442497198",
			"title": "СНАЙПЕР ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7154,
						"count": 50,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7293,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7295": {
			"id": 7295,
			"picture": "shr/d/technology_picture/130368_3_15_133959_comander.png?ux=1442497198",
			"title": "ВОЖАК",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7155,
						"count": 15,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7296": {
			"id": 7296,
			"picture": "shr/d/technology_picture/130368_3_15_133959_comander.png?ux=1442497198",
			"title": "ВОЖАК ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7155,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7295,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7297": {
			"id": 7297,
			"picture": "shr/d/technology_picture/130368_3_15_133959_comander.png?ux=1442497198",
			"title": "ВОЖАК ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7155,
						"count": 50,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7296,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7298": {
			"id": 7298,
			"picture": "shr/d/technology_picture/112889_3_3181_172326_21_s_02.png?ux=1442497198",
			"title": "ПРИНУДИТЕЛЬ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7156,
						"count": 50,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7299": {
			"id": 7299,
			"picture": "shr/d/technology_picture/112889_3_3181_172326_21_s_02.png?ux=1442497198",
			"title": "ПРИНУДИТЕЛЬ ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7156,
						"count": 100,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7298,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7300": {
			"id": 7300,
			"picture": "shr/d/technology_picture/112889_3_3181_172326_21_s_02.png?ux=1442497198",
			"title": "ПРИНУДИТЕЛЬ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7156,
						"count": 200,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7299,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7301": {
			"id": 7301,
			"picture": "shr/d/technology_picture/137560_3_3255_143022_ava45_2.png?ux=1442497198",
			"title": "НАЛЕТЧИК",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7157,
						"count": 50,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7302": {
			"id": 7302,
			"picture": "shr/d/technology_picture/137560_3_3255_143022_ava45_2.png?ux=1442497198",
			"title": "НАЛЕТЧИК ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7157,
						"count": 100,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7301,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7303": {
			"id": 7303,
			"picture": "shr/d/technology_picture/137560_3_3255_143022_ava45_2.png?ux=1442497198",
			"title": "НАЛЕТЧИК ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7157,
						"count": 200,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7302,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7304": {
			"id": 7304,
			"picture": "shr/d/technology_picture/123163_3_3255_164125_ava24_2.png?ux=1442497198",
			"title": "РАЗРУШИТЕЛЬ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7158,
						"count": 7,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7305": {
			"id": 7305,
			"picture": "shr/d/technology_picture/123163_3_3255_164125_ava24_2.png?ux=1442497198",
			"title": "РАЗРУШИТЕЛЬ ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7158,
						"count": 14,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7304,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7306": {
			"id": 7306,
			"picture": "shr/d/technology_picture/123163_3_3255_164125_ava24_2.png?ux=1442497198",
			"title": "РАЗРУШИТЕЛЬ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7158,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7305,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7307": {
			"id": 7307,
			"picture": "shr/d/technology_picture/ava39_2-22.png?ux=1442497198",
			"title": "ЩИТОНОСЕЦ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7159,
						"count": 10,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7308": {
			"id": 7308,
			"picture": "shr/d/technology_picture/ava39_2-22.png?ux=1442497198",
			"title": "ЩИТОНОСЕЦ ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7159,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7307,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7309": {
			"id": 7309,
			"picture": "shr/d/technology_picture/ava39_2-22.png?ux=1442497198",
			"title": "ЩИТОНОСЕЦ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7159,
						"count": 35,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7308,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7310": {
			"id": 7310,
			"picture": "shr/d/technology_picture/130304_3_15_124130_gunner.png?ux=1442497198",
			"title": "ПОТРОШИТЕЛЬ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7160,
						"count": 7,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7311": {
			"id": 7311,
			"picture": "shr/d/technology_picture/130304_3_15_124130_gunner.png?ux=1442497198",
			"title": "ПОТРОШИТЕЛЬ ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7160,
						"count": 14,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7310,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7312": {
			"id": 7312,
			"picture": "shr/d/technology_picture/130304_3_15_124130_gunner.png?ux=1442497198",
			"title": "ПОТРОШИТЕЛЬ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7160,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7311,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7313": {
			"id": 7313,
			"picture": "shr/d/technology_picture/136829_3_3255_143700_ava42_2.png?ux=1442497198",
			"title": "АРЛЕКИН",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "5",
				"4483": "100",
				"61": "100"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7161,
						"count": 40,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7314": {
			"id": 7314,
			"picture": "shr/d/technology_picture/136829_3_3255_143700_ava42_2.png?ux=1442497198",
			"title": "АРЛЕКИН ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "7",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7161,
						"count": 80,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7313,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7315": {
			"id": 7315,
			"picture": "shr/d/technology_picture/136829_3_3255_143700_ava42_2.png?ux=1442497198",
			"title": "АРЛЕКИН ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7161,
						"count": 160,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7314,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7316": {
			"id": 7316,
			"picture": "shr/d/technology_picture/137559_3_3255_130947_ava44_2.png?ux=1442497198",
			"title": "КАРАТЕЛЬ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7162,
						"count": 10,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7317": {
			"id": 7317,
			"picture": "shr/d/technology_picture/137559_3_3255_130947_ava44_2.png?ux=1442497198",
			"title": "КАРАТЕЛЬ ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7162,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7316,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7318": {
			"id": 7318,
			"picture": "shr/d/technology_picture/137559_3_3255_130947_ava44_2.png?ux=1442497198",
			"title": "КАРАТЕЛЬ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7162,
						"count": 35,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7317,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7319": {
			"id": 7319,
			"picture": "shr/d/technology_picture/115090_3_3255_171436_ava15_3.png?ux=1442497198",
			"title": "ГАДЮКА",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7163,
						"count": 10,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7320": {
			"id": 7320,
			"picture": "shr/d/technology_picture/115090_3_3255_171436_ava15_3.png?ux=1442497198",
			"title": "ГАДЮКА ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7163,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7319,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7321": {
			"id": 7321,
			"picture": "shr/d/technology_picture/115090_3_3255_171436_ava15_3.png?ux=1442497198",
			"title": "ГАДЮКА ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7163,
						"count": 35,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7320,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7322": {
			"id": 7322,
			"picture": "shr/d/technology_picture/126379_3_3255_173643_ava29_2.png?ux=1442497198",
			"title": "ПАЛАЧ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7164,
						"count": 7,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7323": {
			"id": 7323,
			"picture": "shr/d/technology_picture/126379_3_3255_173643_ava29_2.png?ux=1442497198",
			"title": "ПАЛАЧ ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7164,
						"count": 14,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7322,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7324": {
			"id": 7324,
			"picture": "shr/d/technology_picture/126379_3_3255_173643_ava29_2.png?ux=1442497198",
			"title": "ПАЛАЧ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7164,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7323,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7325": {
			"id": 7325,
			"picture": "shr/d/technology_picture/125091_3_15_174807_stb.png?ux=1442497198",
			"title": "ПЕХОТИНЕЦ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7166,
						"count": 50,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7326": {
			"id": 7326,
			"picture": "shr/d/technology_picture/125091_3_15_174807_stb.png?ux=1442497198",
			"title": "ПЕХОТИНЕЦ ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7166,
						"count": 100,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7325,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7327": {
			"id": 7327,
			"picture": "shr/d/technology_picture/125091_3_15_174807_stb.png?ux=1442497198",
			"title": "ПЕХОТИНЕЦ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7166,
						"count": 200,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7326,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7328": {
			"id": 7328,
			"picture": "shr/d/technology_picture/112889_3_3181_171623_9_s_02.png?ux=1442497198",
			"title": "ШТУРМОВИК",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7167,
						"count": 40,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7329": {
			"id": 7329,
			"picture": "shr/d/technology_picture/112889_3_3181_171623_9_s_02.png?ux=1442497198",
			"title": "ШТУРМОВИК ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7167,
						"count": 80,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7328,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7330": {
			"id": 7330,
			"picture": "shr/d/technology_picture/112889_3_3181_171623_9_s_02.png?ux=1442497198",
			"title": "ШТУРМОВИК ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7167,
						"count": 160,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7328,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7331": {
			"id": 7331,
			"picture": "shr/d/technology_picture/140581_3_15_164211_sk.png?ux=1442497198",
			"title": "АССАСИН",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "5",
				"4483": "100",
				"61": "100"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7168,
						"count": 40,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7332": {
			"id": 7332,
			"picture": "shr/d/technology_picture/140581_3_15_164211_sk.png?ux=1442497198",
			"title": "АССАСИН ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "7",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7168,
						"count": 80,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7331,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7333": {
			"id": 7333,
			"picture": "shr/d/technology_picture/140581_3_15_164211_sk.png?ux=1442497198",
			"title": "АССАСИН ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7168,
						"count": 160,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7332,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7334": {
			"id": 7334,
			"picture": "shr/d/technology_picture/142141_3_3255_182716_ava53_2.png?ux=1442497198",
			"title": "ТАНК \"МАМОНТ\"",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7169,
						"count": 7,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7335": {
			"id": 7335,
			"picture": "shr/d/technology_picture/142141_3_3255_182716_ava53_2.png?ux=1442497198",
			"title": "ТАНК \"МАМОНТ\" ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7169,
						"count": 14,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7334,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7336": {
			"id": 7336,
			"picture": "shr/d/technology_picture/142141_3_3255_182716_ava53_2.png?ux=1442497198",
			"title": "ТАНК \"МАМОНТ\" ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7169,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7335,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7337": {
			"id": 7337,
			"picture": "shr/d/technology_picture/141189_3_3859_131313_black_gunner_ava.png?ux=1442497198",
			"title": "СУПЕРСОЛДАТ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7170,
						"count": 10,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7338": {
			"id": 7338,
			"picture": "shr/d/technology_picture/141189_3_3859_131313_black_gunner_ava.png?ux=1442497198",
			"title": "СУПЕРСОЛДАТ ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7170,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7337,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7339": {
			"id": 7339,
			"picture": "shr/d/technology_picture/141189_3_3859_131313_black_gunner_ava.png?ux=1442497198",
			"title": "СУПЕРСОЛДАТ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7170,
						"count": 35,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7338,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7340": {
			"id": 7340,
			"picture": "shr/d/technology_picture/140601_3_3255_182859_ava51_2.png?ux=1442497198",
			"title": "МЕДИК",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7171,
						"count": 15,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7341": {
			"id": 7341,
			"picture": "shr/d/technology_picture/140601_3_3255_182859_ava51_2.png?ux=1442497198",
			"title": "МЕДИК ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7171,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7340,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7342": {
			"id": 7342,
			"picture": "shr/d/technology_picture/140601_3_3255_182859_ava51_2.png?ux=1442497198",
			"title": "МЕДИК ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7171,
						"count": 50,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7341,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7343": {
			"id": 7343,
			"picture": "shr/d/technology_picture/141737_3_3255_144319_ava58_22.png?ux=1442497198",
			"title": "БОМБОЛЕТ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7172,
						"count": 10,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7344": {
			"id": 7344,
			"picture": "shr/d/technology_picture/141737_3_3255_144319_ava58_22.png?ux=1442497198",
			"title": "БОМБОЛЕТ ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7172,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7343,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7345": {
			"id": 7345,
			"picture": "shr/d/technology_picture/141737_3_3255_144319_ava58_22.png?ux=1442497198",
			"title": "БОМБОЛЕТ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7172,
						"count": 35,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7344,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7346": {
			"id": 7346,
			"picture": "shr/d/technology_picture/143089_3_3255_143302_ava60_23.png?ux=1442497198",
			"title": "ТЕРМИНАТОР",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7173,
						"count": 10,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7347": {
			"id": 7347,
			"picture": "shr/d/technology_picture/143089_3_3255_143302_ava60_23.png?ux=1442497198",
			"title": "ТЕРМИНАТОР ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7173,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7346,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7348": {
			"id": 7348,
			"picture": "shr/d/technology_picture/143089_3_3255_143302_ava60_23.png?ux=1442497198",
			"title": "ТЕРМИНАТОР ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7173,
						"count": 35,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7347,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7349": {
			"id": 7349,
			"picture": "shr/d/technology_picture/142689_3_2334_123004_balck_comander_ava.png?ux=1442497198",
			"title": "КОМАНДИР",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7174,
						"count": 15,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7350": {
			"id": 7350,
			"picture": "shr/d/technology_picture/142689_3_2334_123004_balck_comander_ava.png?ux=1442497198",
			"title": "КОМАНДИР ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7174,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7349,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7351": {
			"id": 7351,
			"picture": "shr/d/technology_picture/142689_3_2334_123004_balck_comander_ava.png?ux=1442497198",
			"title": "КОМАНДИР ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7174,
						"count": 50,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7350,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7352": {
			"id": 7352,
			"picture": "shr/d/technology_picture/142567_3_7_184844_142567_3_3255_164256_ava56_22.png?ux=1442497198",
			"title": "ПОДАВИТЕЛЬ",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7175,
						"count": 15,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7353": {
			"id": 7353,
			"picture": "shr/d/technology_picture/142567_3_7_184844_142567_3_3255_164256_ava56_22.png?ux=1442497198",
			"title": "ПОДАВИТЕЛЬ ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7175,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7352,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7354": {
			"id": 7354,
			"picture": "shr/d/technology_picture/142567_3_7_184844_142567_3_3255_164256_ava56_22.png?ux=1442497198",
			"title": "ПОДАВИТЕЛЬ ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7175,
						"count": 50,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7353,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7355": {
			"id": 7355,
			"picture": "shr/d/technology_picture/127691_3_15_132838_sniper.png?ux=1442497198",
			"title": "ЛИКВИДАТОР",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7176,
						"count": 15,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7356": {
			"id": 7356,
			"picture": "shr/d/technology_picture/127691_3_15_132838_sniper.png?ux=1442497198",
			"title": "ЛИКВИДАТОР ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7176,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7355,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7357": {
			"id": 7357,
			"picture": "shr/d/technology_picture/127691_3_15_132838_sniper.png?ux=1442497198",
			"title": "ЛИКВИДАТОР ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7176,
						"count": 50,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7356,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7362": {
			"id": 7362,
			"picture": "shr/d/technology_picture/147483_3_3255_152759_075.png?ux=1442497198",
			"title": "ПИСТОЛЕТ ДОМИНИОНА",
			"info": "ИССЛЕДУЕТСЯ: Пистолет, способный наносить [ECE9DE]224[-]/[FE7E0D]380[-] [68FFFE]ЭНЕРГЕТИЧЕСКОГО[-] урона.",
			"order": 0,
			"researchTime": 120,
			"price": {
				"253": "40",
				"65": "800",
				"244": "800"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 7363,
						"count": 50,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 7359,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 7358,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7371": {
			"id": 7371,
			"picture": "shr/d/technology_picture/143869_3_2334_112834_ava63_2.png?ux=1442497198",
			"title": "СИНТЕТИК \"C-500\"",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7369,
						"count": 40,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7372": {
			"id": 7372,
			"picture": "shr/d/technology_picture/143869_3_2334_112834_ava63_2.png?ux=1442497198",
			"title": "СИНТЕТИК \"C-500\" ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7369,
						"count": 80,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7371,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7373": {
			"id": 7373,
			"picture": "shr/d/technology_picture/143869_3_2334_112834_ava63_2.png?ux=1442497198",
			"title": "СИНТЕТИК \"C-500\" ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7369,
						"count": 120,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7372,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7374": {
			"id": 7374,
			"picture": "shr/d/technology_picture/144541_3_3255_145640_ava67_6.png?ux=1442497198",
			"title": "СИНТЕТИК \"C-800\"",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7370,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7375": {
			"id": 7375,
			"picture": "shr/d/technology_picture/144541_3_3255_145640_ava67_6.png?ux=1442497198",
			"title": "СИНТЕТИК \"C-800\" ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7370,
						"count": 60,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7374,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7376": {
			"id": 7376,
			"picture": "shr/d/technology_picture/144541_3_3255_145640_ava67_6.png?ux=1442497198",
			"title": "СИНТЕТИК \"C-800\" ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7370,
						"count": 90,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7375,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7384": {
			"id": 7384,
			"picture": "shr/d/technology_picture/146527_3_3255_172628_ava67_32.png?ux=1442497198",
			"title": "ДОМИНАТОР \"ТИРАН\"",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7380,
						"count": 3,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7385": {
			"id": 7385,
			"picture": "shr/d/technology_picture/146527_3_3255_172628_ava67_32.png?ux=1442497198",
			"title": "ДОМИНАТОР \"ТИРАН\" ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7380,
						"count": 6,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7384,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7386": {
			"id": 7386,
			"picture": "shr/d/technology_picture/146527_3_3255_172628_ava67_32.png?ux=1442497198",
			"title": "ДОМИНАТОР \"ТИРАН\" ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7380,
						"count": 12,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7385,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7390": {
			"id": 7390,
			"picture": "shr/d/technology_picture/146794_3_3255_142937_ava67_93.png?ux=1442497198",
			"title": "ДОМИНАТОР \"АРАХНИД\"",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7387,
						"count": 15,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7391": {
			"id": 7391,
			"picture": "shr/d/technology_picture/146794_3_3255_142937_ava67_93.png?ux=1442497198",
			"title": "ДОМИНАТОР \"АРАХНИД\" ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7387,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7390,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7392": {
			"id": 7392,
			"picture": "shr/d/technology_picture/146794_3_3255_142937_ava67_93.png?ux=1442497198",
			"title": "ДОМИНАТОР \"АРАХНИД\" ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7387,
						"count": 45,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7391,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7395": {
			"id": 7395,
			"picture": "shr/d/technology_picture/145828_3_3255_153301_ava67_8.png?ux=1442497198",
			"title": "ДОМИНАТОР \"ТЕХНИК\"",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7394,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7396": {
			"id": 7396,
			"picture": "shr/d/technology_picture/145828_3_3255_153301_ava67_8.png?ux=1442497198",
			"title": "ДОМИНАТОР \"ТЕХНИК\" ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7394,
						"count": 40,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7395,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7397": {
			"id": 7397,
			"picture": "shr/d/technology_picture/145828_3_3255_153301_ava67_8.png?ux=1442497198",
			"title": "ДОМИНАТОР \"ТЕХНИК\" ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7394,
						"count": 60,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7396,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7429": {
			"id": 7429,
			"picture": "shr/d/technology_picture/139504_3_434_120115_k2.png?ux=1442497198",
			"title": "КОСТЮМ ДОМИНИОНА",
			"info": "ИССЛЕДУЕТСЯ: Костюм со степенью защиты [ECE9DE]3700[-]. В PVP делает командора пуленепробиваемым.",
			"order": 0,
			"researchTime": 120,
			"price": {
				"253": "40",
				"244": "400",
				"65": "1500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 7379,
						"count": 15,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 7422,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 7419,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7440": {
			"id": 7440,
			"picture": "shr/d/technology_picture/145100_3_3255_122924_ava66_2.png?ux=1442497198",
			"title": "СИНТЕТИК \"C-900\"",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7439,
						"count": 6,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7441": {
			"id": 7441,
			"picture": "shr/d/technology_picture/145100_3_3255_122924_ava66_2.png?ux=1442497198",
			"title": "СИНТЕТИК \"C-900\" ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7439,
						"count": 12,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7440,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7442": {
			"id": 7442,
			"picture": "shr/d/technology_picture/145100_3_3255_122924_ava66_2.png?ux=1442497198",
			"title": "СИНТЕТИК \"C-900\" ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7439,
						"count": 18,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7441,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7443": {
			"id": 7443,
			"picture": "shr/d/technology_picture/145385_3_2334_121357_ava64_2.png?ux=1442497198",
			"title": "СИНТЕТИК \"C-400\"",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "8",
				"4483": "150",
				"61": "150"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7437,
						"count": 12,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7444": {
			"id": 7444,
			"picture": "shr/d/technology_picture/145385_3_2334_121357_ava64_2.png?ux=1442497198",
			"title": "СИНТЕТИК \"C-400\" ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7437,
						"count": 24,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7443,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7445": {
			"id": 7445,
			"picture": "shr/d/technology_picture/145385_3_2334_121357_ava64_2.png?ux=1442497198",
			"title": "СИНТЕТИК \"C-400\" ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "13",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7437,
						"count": 36,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7444,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7480": {
			"id": 7480,
			"picture": "shr/d/technology_picture/145635_3_3255_132023_073.png?ux=1442497198",
			"title": "ДРОБОВИК ДОМИНИОНА",
			"info": "ИССЛЕДУЕТСЯ: Дробовик с [68FFFE]ЭНЕРГЕТИЧЕСКИМ[-] уроном [ECE9DE]1700[-]/[FE7E0D]2890[-].",
			"order": 0,
			"researchTime": 90,
			"price": {
				"253": "35",
				"244": "800",
				"61": "800"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 7379,
						"count": 15,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 7481,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 7362,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 7479,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7488": {
			"id": 7488,
			"picture": "shr/d/technology_picture/147485_3_3255_130849_074.png?ux=1442497198",
			"title": "КИСЛОТНАЯ ПУШКА",
			"info": "ИССЛЕДУЕТСЯ: Мощнейшее кислотное оружие, боевые возможности которого даже невозможно предсказать.",
			"order": 0,
			"researchTime": 240,
			"price": {
				"253": "40",
				"4483": "2500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 4234,
						"count": 4,
						"choice": "ConditionUseAbility"
					},
					"2": {
						"item": 7487,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 5913,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 7486,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7499": {
			"id": 7499,
			"picture": "shr/d/technology_picture/148045_3_3255_185050_ava70_22.png?ux=1442497198",
			"title": "ТУРЕЛЬ \"ДОМИНИОН\"",
			"info": "ИССЛЕДУЕТСЯ: Улучшение защиты базы до 550.",
			"order": 0,
			"researchTime": 240,
			"price": {
				"253": "40",
				"244": "2000",
				"64": "2000"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 7363,
						"count": 50,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 7496,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 5789,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"building": 7498,
						"choice": "DiscoveryBuilding"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7522": {
			"id": 7522,
			"picture": "shr/d/technology_picture/147668_3_3255_182409_ava71_22.png?ux=1442497198",
			"title": "ДОМИНАТОР \"ЦИКЛОН\"",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7491,
						"count": 10,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7523": {
			"id": 7523,
			"picture": "shr/d/technology_picture/147668_3_3255_182409_ava71_22.png?ux=1442497198",
			"title": "ДОМИНАТОР \"ЦИКЛОН\" ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7491,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7522,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7524": {
			"id": 7524,
			"picture": "shr/d/technology_picture/147668_3_3255_182409_ava71_22.png?ux=1442497198",
			"title": "ДОМИНАТОР \"ЦИКЛОН\" ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7491,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7523,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7532": {
			"id": 7532,
			"picture": "shr/d/technology_picture/145646_3_3255_155230_072.png?ux=1442497198",
			"title": "АВТОМАТ ДОМИНИОНА",
			"info": "Автомат, способный наносить [ECE9DE]325[-]/[FE7E0D]550[-] [68FFFE]ЭНЕРГЕТИЧЕСКОГО[-] урона.",
			"order": 0,
			"researchTime": 90,
			"price": {
				"253": "35",
				"244": "800",
				"61": "800"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 7379,
						"count": 15,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 7531,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 7362,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 7501,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7548": {
			"id": 7548,
			"picture": "shr/d/technology_picture/148502_3_3255_113150_ava72_22.png?ux=1442497198",
			"title": "ДОМИНАТОР \"ГОНЧАЯ\"",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7547,
						"count": 10,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7549": {
			"id": 7549,
			"picture": "shr/d/technology_picture/148502_3_3255_113150_ava72_22.png?ux=1442497198",
			"title": "ДОМИНАТОР \"ГОНЧАЯ\" ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7547,
						"count": 20,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7548,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7550": {
			"id": 7550,
			"picture": "shr/d/technology_picture/148502_3_3255_113150_ava72_22.png?ux=1442497198",
			"title": "ДОМИНАТОР \"ГОНЧАЯ\" ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 7547,
						"count": 30,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 7549,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7736": {
			"id": 7736,
			"picture": "shr/d/technology_picture/129744_3_3255_132248_045.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ ПСИ-СИЛЫ ур.10",
			"info": "ИССЛЕДУЕТСЯ: Нанесение до 4150 единиц урона и похищение до 1300 здоровья в случае добивания противника пси-ударом.",
			"order": 100,
			"researchTime": 120,
			"price": {
				"253": "40",
				"244": "2300",
				"65": "2300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 7734,
						"choice": "ConditionItem"
					},
					"2": {
						"count": 30,
						"choice": "ConditionKillPsyShot"
					},
					"3": {
						"tech": 6473,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "PsyShot",
						"value": 4150,
						"choice": "DiscoveryUpgrade"
					},
					"2": {
						"upgradeType": "NewUsePriceCount",
						"value": 63,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"7737": {
			"id": 7737,
			"picture": "shr/d/technology_picture/129744_3_3255_132248_045.png?ux=1442497198",
			"title": "УЛУЧШЕНИЕ ПСИ-СИЛЫ ур.11",
			"info": "ИССЛЕДУЕТСЯ: Нанесение до 5000 единиц урона и похищение до 1650 здоровья в случае добивания противника пси-ударом.",
			"order": 100,
			"researchTime": 120,
			"price": {
				"253": "40",
				"244": "2500",
				"65": "2500"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 7735,
						"choice": "ConditionItem"
					},
					"2": {
						"count": 30,
						"choice": "ConditionKillPsyShot"
					},
					"3": {
						"tech": 7736,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "PsyShot",
						"value": 5000,
						"choice": "DiscoveryUpgrade"
					},
					"2": {
						"upgradeType": "NewUsePriceCount",
						"value": 65,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"8177": {
			"id": 8177,
			"picture": "shr/d/technology_picture/149979_3_6_122758_149979_3_3255_172258_icons_hel_6.png?ux=1442497198",
			"title": "АНТИГРАВИТАЦИЯ",
			"info": "ИССЛЕДУЕТСЯ: Возможность построить летательный аппарат VX-1909, способный достичь самых удаленных участков планеты.",
			"order": 100,
			"researchTime": 240,
			"price": {
				"253": "30",
				"244": "1200",
				"61": "1200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 8181,
						"count": 30,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 8178,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"8219": {
			"id": 8219,
			"picture": "shr/d/technology_picture/142647_3_3255_140818_069.png?ux=1442497198",
			"title": "ПИСТОЛЕТ \"ДРАКОН-2\"",
			"info": "ИССЛЕДУЕТСЯ: Пистолет, способный наносить [ECE9DE]268[-]/[FE7E0D]453[-] [CE0000]ОГНЕННОГО[-] урона.",
			"order": 0,
			"researchTime": 30,
			"price": {
				"253": "35",
				"4483": "1800"
			},
			"conditions": {
				"conditions": {
					"1": {
						"item": 5586,
						"count": 5,
						"choice": "ConditionUseAbility"
					},
					"2": {
						"item": 8220,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 6035,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 8218,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"8294": {
			"id": 8294,
			"picture": "shr/d/technology_picture/135305_3_3255_115055_075.png?ux=1442497198",
			"title": "РЕГЕНЕРАЦИЯ ур.9",
			"info": "ИССЛЕДУЕТСЯ: После боя здоровье восстанавливается со скоростью 540 в минуту.",
			"order": 100,
			"researchTime": 180,
			"price": {
				"253": "40",
				"64": "1900",
				"244": "1900"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 4093,
						"count": 3,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 8292,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 4713,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "RegenerationSpeedPercent",
						"value": 440,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"8295": {
			"id": 8295,
			"picture": "shr/d/technology_picture/135305_3_3255_115055_075.png?ux=1442497198",
			"title": "РЕГЕНЕРАЦИЯ ур.10",
			"info": "ИССЛЕДУЕТСЯ: После боя здоровье восстанавливается со скоростью 635 в минуту.",
			"order": 100,
			"researchTime": 210,
			"price": {
				"253": "40",
				"64": "2100",
				"244": "2100"
			},
			"conditions": {
				"conditions": {
					"1": {
						"tag": 5674,
						"count": 3,
						"snipeShot": false,
						"choice": "ConditionKillTagBot"
					},
					"2": {
						"item": 8293,
						"choice": "ConditionItem"
					},
					"3": {
						"tech": 8294,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"upgradeType": "RegenerationSpeedPercent",
						"value": 535,
						"choice": "DiscoveryUpgrade"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"8310": {
			"id": 8310,
			"picture": "shr/d/technology_picture/151077_3_3255_114215_ava73_2.png?ux=1442497198",
			"title": "ДОМИНАТОР \"УРАВНИТЕЛЬ\"",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 8301,
						"count": 7,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"8311": {
			"id": 8311,
			"picture": "shr/d/technology_picture/151077_3_3255_114215_ava73_2.png?ux=1442497198",
			"title": "ДОМИНАТОР \"УРАВНИТЕЛЬ\" ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 8301,
						"count": 15,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 8310,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"8312": {
			"id": 8312,
			"picture": "shr/d/technology_picture/151077_3_3255_114215_ava73_2.png?ux=1442497198",
			"title": "ДОМИНАТОР \"УРАВНИТЕЛЬ\" ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 8301,
						"count": 25,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 8311,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"8364": {
			"id": 8364,
			"picture": "shr/d/technology_picture/124876_3_3255_135123_040.png?ux=1442497198",
			"title": "СТАЗИСНАЯ ГРАНАТА",
			"info": "ИССЛЕДУЕТСЯ: Возможность производить гранату, замедляющую всех противников на поле боя.",
			"order": 0,
			"researchTime": 120,
			"price": {
				"253": "35",
				"244": "1500",
				"64": "2000"
			},
			"conditions": {
				"conditions": {
					"1": {
						"count": 20,
						"choice": "ConditionRejectedGrenade"
					},
					"2": {
						"item": 8363,
						"choice": "ConditionItem"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"item": 1531,
						"choice": "DiscoveryItem"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"8386": {
			"id": 8386,
			"picture": "shr/d/technology_picture/146323_3_3255_113837_ava67_4.png?ux=1442497198",
			"title": "СИНТЕТИК \"E-5000\"",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 8385,
						"count": 3,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"8387": {
			"id": 8387,
			"picture": "shr/d/technology_picture/146323_3_3255_113837_ava67_4.png?ux=1442497198",
			"title": "СИНТЕТИК \"E-5000\" ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 8385,
						"count": 6,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 8386,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"8388": {
			"id": 8388,
			"picture": "shr/d/technology_picture/146323_3_3255_113837_ava67_4.png?ux=1442497198",
			"title": "СИНТЕТИК \"E-5000\" ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 8385,
						"count": 12,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 8387,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"8455": {
			"id": 8455,
			"picture": "shr/d/technology_picture/154404_3_4969_113354_spyder_avatar_2.png?ux=1442497198",
			"title": "ДОМИНАТОР \"ТЕРМИТ\"",
			"order": 100,
			"researchTime": 5,
			"price": {
				"253": "10",
				"4483": "200",
				"61": "200"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 8454,
						"count": 12,
						"choice": "ConditionKillBotOfKind"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "critUpgrade",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"8456": {
			"id": 8456,
			"picture": "shr/d/technology_picture/154404_3_4969_113354_spyder_avatar_2.png?ux=1442497198",
			"title": "ДОМИНАТОР \"ТЕРМИТ\" ур.2",
			"order": 100,
			"researchTime": 15,
			"price": {
				"253": "12",
				"4483": "250",
				"61": "250"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 8454,
						"count": 24,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 8455,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "sniperShotDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		},
		"8457": {
			"id": 8457,
			"picture": "shr/d/technology_picture/154404_3_4969_113354_spyder_avatar_2.png?ux=1442497198",
			"title": "ДОМИНАТОР \"ТЕРМИТ\" ур.3",
			"order": 100,
			"researchTime": 30,
			"price": {
				"253": "15",
				"4483": "300",
				"61": "300"
			},
			"conditions": {
				"conditions": {
					"1": {
						"bot": 8454,
						"count": 36,
						"choice": "ConditionKillBotOfKind"
					},
					"2": {
						"tech": 8456,
						"choice": "ConditionTech"
					}
				}
			},
			"discoveryList": {
				"discoveryList": {
					"1": {
						"type": "botKindDamage",
						"choice": "DiscoveryAnalyticalCenter"
					}
				}
			},
			"minVersion": null,
			"maxVersion": null
		}
	}
}