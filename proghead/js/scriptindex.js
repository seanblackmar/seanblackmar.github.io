function randomImg() {
	var quotes = [
        { album: "....Lifun - Trubrot - 1971", img: "images/500x500/1.jpg" },
		{ album: "...Sounds Like This - Nektar - 1973", img: "images/500x500/2.jpg" },
		{ album: "1000 Autunni - Ske - 2011", img: "images/500x500/3.jpg" },
		{ album: "1001° Centigrades - Magma - 1971", img: "images/500x500/4.jpg" },
		{ album: "10cc - 10cc - 1973", img: "images/500x500/5.jpg" },
		{ album: "1973 - Placebo - 1973", img: "images/500x500/6.jpg" },
		{ album: "1990 - Solaris - 1990", img: "images/500x500/7.jpg" },
		{ album: "1998 La Storia Di S'abazio - Triade - 1973", img: "images/500x500/8.jpg" },
		{ album: "200 Years After The Last War - Omega - 1973", img: "images/500x500/9.jpg" },
		{ album: "20000 Miles Under The Sea - Nautilus - 1978", img: "images/500x500/10.jpg" },
		{ album: "2001 - Amanda Shankar - 1984", img: "images/500x500/11.jpg" },
		{ album: "2023 - Bans Manco - 1975", img: "images/500x500/12.jpg" },
		{ album: "2375004 - Ihre Kinder - 1970", img: "images/500x500/13.jpg" },
		{ album: "25 Years On - Hawklords - 1978", img: "images/500x500/14.jpg" },
		{ album: "2973 La Nemica Dei Ricordi - Spettri - 2015", img: "images/500x500/15.jpg" },
		{ album: "2Nd - Agitation Free - 1973", img: "images/500x500/16.jpg" },
		{ album: "3 - Ekseption - 1970", img: "images/500x500/17.jpg" },
		{ album: "3:E Skivan - Mikael Ramel - 1977", img: "images/500x500/18.jpg" },
		{ album: "4 Visions - Eskaton - 1979", img: "images/500x500/19.jpg" },
		{ album: "666 - Aphrodites Child - 1972", img: "images/500x500/20.jpg" },
		{ album: "801 Live - 801 - 1984", img: "images/500x500/21.jpg" },
		{ album: "9 Parts To The Wind - Strange Days - 1975", img: "images/500x500/22.jpg" },
		{ album: "A Breath Of Fresh Air - Albatross - 1973", img: "images/500x500/23.jpg" },
		{ album: "A Funky Thide Of Sings - Billy Cobham - 1975", img: "images/500x500/24.jpg" },
		{ album: "A Jug Of Love - Mighty Baby - 1971", img: "images/500x500/25.jpg" },
		{ album: "A L'Aube Du Versea - Elohim - 1975", img: "images/500x500/26.jpg" },
		{ album: "A Musical Evening With The Mick Abrahams Band - Mick Abrahams - 1971", img: "images/500x500/27.jpg" },
		{ album: "A Nice Way Of Love - Cruciferius - 1970", img: "images/500x500/28.jpg" },
		{ album: "A Question Of Balance - The Moody Blues - 1970", img: "images/500x500/29.jpg" },
		{ album: "A Rohanas - Skorpio - 1974", img: "images/500x500/30.jpg" },
		{ album: "A Salty Dog - Procol Harum - 1969", img: "images/500x500/31.jpg" },
		{ album: "A Scarcity Of Miracles - Jakszyk, Fripp, And Collins - 2011", img: "images/500x500/32.jpg" },
		{ album: "A Tab In The Ocean - Nektar - 1972", img: "images/500x500/33.jpg" },
		{ album: "A Third Of A Lifetime - Three Man Army - 1971", img: "images/500x500/34.jpg" },
		{ album: "A Toast To Panama Red - Master'S Apprentices - 1972", img: "images/500x500/35.jpg" },
		{ album: "A Trick Of The Trail - Genesis - 1975", img: "images/500x500/36.jpg" },
		{ album: "A Way Of Express - Sisyphos - 1981", img: "images/500x500/37.jpg" },
		{ album: "A.R. Iv - Achim Reichel & Machines - 1973", img: "images/500x500/38.jpg" },
		{ album: "A=Mh2 - Clark-Hutchinson - 1969", img: "images/500x500/39.jpg" },
		{ album: "About The Black Eyed Girl - Indisciplined Lucky - 1999", img: "images/500x500/40.jpg" },
		{ album: "Abrakadabra - Klockwerk Orange - 1975", img: "images/500x500/41.jpg" },
		{ album: "Abraxas - Santana - 1970", img: "images/500x500/42.jpg" },
		{ album: "Acoustics - Aquarium - 1982", img: "images/500x500/43.jpg" },
		{ album: "Acquiring The Taste - Gentle Giant - 1971", img: "images/500x500/44.jpg" },
		{ album: "Act One - Beggars Opera - 1970", img: "images/500x500/45.jpg" },
		{ album: "Ad Gloriam - Le Orme - 1969", img: "images/500x500/46.jpg" },
		{ album: "Adonis - Anyone'S Daughter - 1979", img: "images/500x500/47.jpg" },
		{ album: "Aerie Faerie Nonsense - The End - 1977", img: "images/500x500/48.jpg" },
		{ album: "Aerolit - Czeslaw Niemen - 1975", img: "images/500x500/49.jpg" },
		{ album: "The Aerosol Grey Machine - Van Der Graaf Generator - 1969", img: "images/500x500/50.jpg" },
		{ album: "Affinity - Affinity - 1970", img: "images/500x500/51.jpg" },
		{ album: "Affresco - Franco Maria Giannini - 1974", img: "images/500x500/52.jpg" },
		{ album: "Afreaka - Demon Fuzz - 1970", img: "images/500x500/53.jpg" },
		{ album: "After The War - Trouble - 1970", img: "images/500x500/54.jpg" },
		{ album: "Agusa - Agusa - 2017", img: "images/500x500/55.jpg" },
		{ album: "Ahead Rings Out - Bloodwyn Pig - 1969", img: "images/500x500/56.jpg" },
		{ album: "Ahmoo - Jupu Group - 1975", img: "images/500x500/57.jpg" },
		{ album: "Ailleurs - Dominique Blanc-Francard - 1972", img: "images/500x500/58.jpg" },
		{ album: "Air Conditioning - Curved Air - 1970", img: "images/500x500/59.jpg" },
		{ album: "Alas - Alas - 1976", img: "images/500x500/60.jpg" },
		{ album: "Albatross - Albatross - 1976", img: "images/500x500/61.jpg" },
		{ album: "Ali Baba - Chute Libre - 1978", img: "images/500x500/62.jpg" },
		{ album: "Alice - Alice - 1970", img: "images/500x500/63.jpg" },
		{ album: "Al-Jadida - Rabih Abou-Khalil - 1991", img: "images/500x500/64.jpg" },
		{ album: "All Our Hopes - Mcoil - 1979", img: "images/500x500/65.jpg" },
		{ album: "All Together Now - Argent - 1972", img: "images/500x500/66.jpg" },
		{ album: "All Will Be Changed - Frumpy - 1970", img: "images/500x500/67.jpg" },
		{ album: "All-Bumm - 18 Karat Gold - 1973", img: "images/500x500/68.jpg" },
		{ album: "Allez Teia - Heldon - 1975", img: "images/500x500/69.jpg" },
		{ album: "Almendra - Almendra - 1969", img: "images/500x500/70.jpg" },
		{ album: "Almost Tender - Solenoid - 1977", img: "images/500x500/71.jpg" },
		{ album: "Alpha Centauri - Alpha Centurus - 1973", img: "images/500x500/72.jpg" },
		{ album: "Alphataurus - Alphataurus - 1973", img: "images/500x500/73.jpg" },
		{ album: "Alshia - Alshia - 1980", img: "images/500x500/74.jpg" },
		{ album: "Altona - Altona - 1974", img: "images/500x500/75.jpg" },
		{ album: "Alturas De Macchu Picchu - Los Jaivas - 1981", img: "images/500x500/76.jpg" },
		{ album: "Alux Nahual - Alux Nahual - 1980", img: "images/500x500/77.jpg" },
		{ album: "Amenophis - Amenophis - 1983", img: "images/500x500/78.jpg" },
		{ album: "Americanos - Contraluz - 1973", img: "images/500x500/79.jpg" },
		{ album: "Ammerland - Fuhrs & Frohling - 1978", img: "images/500x500/80.jpg" },
		{ album: "Amputechture - The Mars Volta - 2006", img: "images/500x500/81.jpg" },
		{ album: "An Asylum For The Musically Insane - Tea And Symphony - 1969", img: "images/500x500/82.jpg" },
		{ album: "An Escape From A Box - Circus 2000 - 1972", img: "images/500x500/83.jpg" },
		{ album: "An Old Castle Of Transylvania - Cosmos Factory - 1973", img: "images/500x500/84.jpg" },
		{ album: "Anabelas - Bubu - 1978", img: "images/500x500/85.jpg" },
		{ album: "Ananda Shankar - Ananda Shankar - 1970", img: "images/500x500/86.jpg" },
		{ album: "Ananda Shankar - Ananda Shankar And His Music - 1975", img: "images/500x500/87.jpg" },
		{ album: "Andaluza - Vega - 1978", img: "images/500x500/88.jpg" },
		{ album: "Angel'S Egg - Gong - 1973", img: "images/500x500/89.jpg" },
		{ album: "Angherr Shisspa - Koenji Hyakkei - 2005", img: "images/500x500/90.jpg" },
		{ album: "Anomaly - Mcluhan - 1972", img: "images/500x500/91.jpg" },
		{ album: "Antologia - Era Di Acquario - 1973", img: "images/500x500/92.jpg" },
		{ album: "Anyone'S Daughter - Anyone'S Daughter - 1980", img: "images/500x500/93.jpg" },
		{ album: "Apocalipsis - Aguaviva - 1971", img: "images/500x500/94.jpg" },
		{ album: "Apoteosi - Apoteosi - 1975", img: "images/500x500/95.jpg" },
		{ album: "Aqualung - Jethro Tull - 1971", img: "images/500x500/96.jpg" },
		{ album: "Aranjuez - Jan Akkerman - Claus Ogerman - 1978", img: "images/500x500/97.jpg" },
		{ album: "Arbeit Macht Frei - Area - 1973", img: "images/500x500/98.jpg" },
		{ album: "Arbete Och Fritid - Arbete Och Fritid - 1970", img: "images/500x500/99.jpg" },
		{ album: "Archaia - Archaia - 1977", img: "images/500x500/100.jpg" },
		{ album: "Arco Iris - Arco Iris - 1970", img: "images/500x500/101.jpg" },
		{ album: "Aria - Alan Sorrenti - 1972", img: "images/500x500/102.jpg" },
		{ album: "Ark 2 - Flaming Youth - 1969", img: "images/500x500/103.jpg" },
		{ album: "The Armada - Rainbow Theatre - 1975", img: "images/500x500/104.jpg" },
		{ album: "Arrow Head - Osage Tribe - 1972", img: "images/500x500/105.jpg" },
		{ album: "Ars Longa Vida Brevis - Haddad - 2004", img: "images/500x500/106.jpg" },
		{ album: "Artuad - Prescado Rabioso - 1973", img: "images/500x500/107.jpg" },
		{ album: "As Criancas Da Nova Floresta - Recordando O Vale Das Macas - 1977", img: "images/500x500/108.jpg" },
		{ album: "As Your Mind Flies By - Rare Bird - 1970", img: "images/500x500/109.jpg" },
		{ album: "Asa Nisi Masa - Dolores - 1978", img: "images/500x500/110.jpg" },
		{ album: "Asfalto - Asfalto - 1978", img: "images/500x500/111.jpg" },
		{ album: "Ash Ra Tempel - Ash Ra Tempel - 1971", img: "images/500x500/112.jpg" },
		{ album: "Ashes Are Burning - Renaissance - 1973", img: "images/500x500/113.jpg" },
		{ album: "The Asmoto Running Band - Principal Edwards Magic Theatre - 1971", img: "images/500x500/114.jpg" },
		{ album: "Astral Projector - Zon - 1978", img: "images/500x500/115.jpg" },
		{ album: "Astrolabio - Garybaldi - 1973", img: "images/500x500/116.jpg" },
		{ album: "Asylum - Cressida - 1971", img: "images/500x500/117.jpg" },
		{ album: "At The Mountains Of Madness - Blackfeather - 1971", img: "images/500x500/118.jpg" },
		{ album: "Atlantide - Atlantide - 1976", img: "images/500x500/119.jpg" },
		{ album: "Atlantis - Earth And Fire - 1973", img: "images/500x500/120.jpg" },
		{ album: "Atomic Rooster - Atomic Rooster - 1970", img: "images/500x500/121.jpg" },
		{ album: "Attosecondo - Alphataurus - 2012", img: "images/500x500/122.jpg" },
		{ album: "Au Nord De Notre Vie - Cano - 1977", img: "images/500x500/123.jpg" },
		{ album: "Aucan - Aucan - 1977", img: "images/500x500/124.jpg" },
		{ album: "Au-Dela Du Delire - Ange - 1974", img: "images/500x500/125.jpg" },
		{ album: "August 9Th - Tranzam - 1975", img: "images/500x500/126.jpg" },
		{ album: "Aura - Aura - 1971", img: "images/500x500/127.jpg" },
		{ album: "Ausschub - Eulenspygel - 1972", img: "images/500x500/128.jpg" },
		{ album: "Automatic Fine Tuning - A.F.T. - 1976", img: "images/500x500/129.jpg" },
		{ album: "Automatic Man - Automatic Man - 1976", img: "images/500x500/130.jpg" },
		{ album: "Autumn Grass - Continuum - 1971", img: "images/500x500/131.jpg" },
		{ album: "Ave Rock - Ave Rock - 1974", img: "images/500x500/132.jpg" },
		{ album: "Ave Sangria - Ave Sangria - 1975", img: "images/500x500/133.jpg" },
		{ album: "Avenida Larco - Fragil - 1981", img: "images/500x500/134.jpg" },
		{ album: "Awake - Ticket - 1972", img: "images/500x500/135.jpg" },
		{ album: "Axis - Axis - 1973", img: "images/500x500/136.jpg" },
		{ album: "Axis - Terra Mystica - 2002", img: "images/500x500/137.jpg" },
		{ album: "Ayeri Y Guei - Nuberu - 1978", img: "images/500x500/138.jpg" },
		{ album: "Azahar - Azahar - 1979", img: "images/500x500/139.jpg" },
		{ album: "Αγάπανθος (Agapanthos) - Αγάπανθος (Agapanthos) - 1976", img: "images/500x500/140.jpg" },
		{ album: "Babylon - Babylon - 1978", img: "images/500x500/141.jpg" },
		{ album: "Back Into The Future - Man - 1973", img: "images/500x500/142.jpg" },
		{ album: "Back To Thunder - Strife - 1978", img: "images/500x500/143.jpg" },
		{ album: "Ballettirosadimacchia - Ballettirosadimacchia - 1974", img: "images/500x500/144.jpg" },
		{ album: "Banco - Banco Del Mutuo Soccorso - 1975", img: "images/500x500/145.jpg" },
		{ album: "Banco Del Mutuo Soccorso - Banco Del Mutuo Soccorso - 1972", img: "images/500x500/146.jpg" },
		{ album: "Bandolier - Budgie - 1975", img: "images/500x500/147.jpg" },
		{ album: "Banquet - Lucifer'S Friend - 1974", img: "images/500x500/148.jpg" },
		{ album: "Bao - Yonin Bayashi - 1978", img: "images/500x500/149.jpg" },
		{ album: "Barndomens Stigar - Kulticator - 1981", img: "images/500x500/150.jpg" },
		{ album: "Barrabas - Barrabas - 1972", img: "images/500x500/151.jpg" },
		{ album: "Barren Dream - Mr. Sirius - 1987", img: "images/500x500/152.jpg" },
		{ album: "Basket Of Light - Pentangle - 1969", img: "images/500x500/153.jpg" },
		{ album: "Be Do Have - Thom Mason - 1980", img: "images/500x500/154.jpg" },
		{ album: "Beat - King Crimson - 1982", img: "images/500x500/155.jpg" },
		{ album: "Beat-Oratorium - Golgatha - 1974", img: "images/500x500/156.jpg" },
		{ album: "Beautiful Lies - Stamatis - 1971", img: "images/500x500/157.jpg" },
		{ album: "Beauty'S Song - Stan Samnole - 1981", img: "images/500x500/158.jpg" },
		{ album: "Beckett - Beckett - 1974", img: "images/500x500/159.jpg" },
		{ album: "Beginnings - Steve Howe - 1975", img: "images/500x500/160.jpg" },
		{ album: "Being - Wigwam - 1974", img: "images/500x500/161.jpg" },
		{ album: "Bells, Boots, And Shambles - Spirogyra - 1973", img: "images/500x500/162.jpg" },
		{ album: "Benzaiten - Osamu Kitajima - 1976", img: "images/500x500/163.jpg" },
		{ album: "Between Flesh And Divine - Asia Minor - 1980", img: "images/500x500/164.jpg" },
		{ album: "Between The Universes - Tritonus - 1976", img: "images/500x500/165.jpg" },
		{ album: "Beyond Expression - Finch - 1976", img: "images/500x500/166.jpg" },
		{ album: "Beyond Panic - Pacific Eardrum - 1978", img: "images/500x500/167.jpg" },
		{ album: "Biglietto Per L'Inferno - Biglietto Per L'Inferno - 1974", img: "images/500x500/168.jpg" },
		{ album: "Birds Of Fire - The Mahavishnu Orchestra - 1972", img: "images/500x500/169.jpg" },
		{ album: "Bitter Harvest - Rabih Abou-Khalil - 1984", img: "images/500x500/170.jpg" },
		{ album: "Bizitako Gauzak - Sakre - 1978", img: "images/500x500/171.jpg" },
		{ album: "Bla Vardog - Atlas - 1979", img: "images/500x500/172.jpg" },
		{ album: "Black And White - Vanessa - 1976", img: "images/500x500/173.jpg" },
		{ album: "Black Hole - Cosmos Factory - 1976", img: "images/500x500/174.jpg" },
		{ album: "Black Hole Star - The Neutrons - 1974", img: "images/500x500/175.jpg" },
		{ album: "Black Magician - Rumplestilskin - 1971", img: "images/500x500/176.jpg" },
		{ album: "Black Noise - Fm - 1978", img: "images/500x500/177.jpg" },
		{ album: "Black Ship - Sadistic Mika Band - 1974", img: "images/500x500/178.jpg" },
		{ album: "Black Widow - Black Widow - 1970", img: "images/500x500/179.jpg" },
		{ album: "Blake'S New Jerusalem - Tim Blake - 1978", img: "images/500x500/180.jpg" },
		{ album: "Blitzkrieg - Wallenstein - 1972", img: "images/500x500/181.jpg" },
		{ album: "Blops - Blops - 1970", img: "images/500x500/182.jpg" },
		{ album: "Bloque - Bloque - 1978", img: "images/500x500/183.jpg" },
		{ album: "Blow By Blow - Jeff Beck - 1975", img: "images/500x500/184.jpg" },
		{ album: "Blue Camel - Rabih Abou-Khalil - 1992", img: "images/500x500/185.jpg" },
		{ album: "Blurring The Lines .​.​.​A Democracy Manifest - Ovrfwrd - 2018", img: "images/500x500/186.jpg" },
		{ album: "Book M - Secret Chiefs 3 - 2001", img: "images/500x500/187.jpg" },
		{ album: "Book Of Hours - Willowglass - 2008", img: "images/500x500/188.jpg" },
		{ album: "The Book Of Invasions - Horslips - 1976", img: "images/500x500/189.jpg" },
		{ album: "Boris - Yezda Urfa - 1975", img: "images/500x500/190.jpg" },
		{ album: "Brain Salad Surgery - Emerson, Lake, & Palmer - 1973", img: "images/500x500/191.jpg" },
		{ album: "Breaking Barriers - Tribute - 1986", img: "images/500x500/192.jpg" },
		{ album: "Breathless - Camel - 1978", img: "images/500x500/193.jpg" },
		{ album: "Brian Auger'S Oblivion Express - Brian Auger'S Oblivion Express - 1973", img: "images/500x500/194.jpg" },
		{ album: "Broken Barricades - Procol Harum - 1971", img: "images/500x500/195.jpg" },
		{ album: "Broselmaschine - Broselmaschine - 1971", img: "images/500x500/196.jpg" },
		{ album: "Brother Bait - Brother Bait - 1976", img: "images/500x500/197.jpg" },
		{ album: "Bull Angus - Bull Angus - 1971", img: "images/500x500/198.jpg" },
		{ album: "Burning Candle - Burning Candle - 1981", img: "images/500x500/199.jpg" },
		{ album: "Burnt Suite - Burnt Suite - 1972", img: "images/500x500/200.jpg" },
		{ album: "Bury My Heart At Wounded Knee - Gila - 1973", img: "images/500x500/201.jpg" },
		{ album: "Busy Making Progress - Progress - 1978", img: "images/500x500/202.jpg" },
		{ album: "C.C.S. - Ccs - 1970", img: "images/500x500/203.jpg" },
		{ album: "Cactus Choir - Dave Greenslade - 1976", img: "images/500x500/204.jpg" },
		{ album: "Cada Vez Mas Cerca - Aguaviva - 1970", img: "images/500x500/205.jpg" },
		{ album: "Camel - Camel - 1973", img: "images/500x500/206.jpg" },
		{ album: "Camenbert Electrique - Gong - 1971", img: "images/500x500/207.jpg" },
		{ album: "Camere Zimmer Rooms - Picchio Dal Pozzo - 2001", img: "images/500x500/208.jpg" },
		{ album: "Campo Di Marte - Campo Di Marte - 1973", img: "images/500x500/209.jpg" },
		{ album: "Canis Iupus - Darryl Way'S Wolf - 1973", img: "images/500x500/210.jpg" },
		{ album: "Cantafabule - Phoenix - 1975", img: "images/500x500/211.jpg" },
		{ album: "Captain Beyond - Captain Beyond - 1972", img: "images/500x500/212.jpg" },
		{ album: "Caravan - Caravan - 1969", img: "images/500x500/213.jpg" },
		{ album: "Caravanserai - Santana - 1972", img: "images/500x500/214.jpg" },
		{ album: "Carnascialia - Carnascialia - 1979", img: "images/500x500/215.jpg" },
		{ album: "Caronte - The Trip - 1971", img: "images/500x500/216.jpg" },
		{ album: "Castle In The Air - Negasphere - 1984", img: "images/500x500/217.jpg" },
		{ album: "Catapilla - Catapilla - 1971", img: "images/500x500/218.jpg" },
		{ album: "Caution Radiation Area - Area - 1974", img: "images/500x500/219.jpg" },
		{ album: "Cei Ce Ne-Au Dat Nume - Phoenix - 1972", img: "images/500x500/220.jpg" },
		{ album: "Charge - Paladin - 1972", img: "images/500x500/221.jpg" },
		{ album: "Chede Chokra'S - Shark Move - 1970", img: "images/500x500/222.jpg" },
		{ album: "Cherry Five - Cherry Five - 1974", img: "images/500x500/223.jpg" },
		{ album: "Chico Magnetic Band - Chico Magnetic Band - 1973", img: "images/500x500/224.jpg" },
		{ album: "Child Of The Novelty - Mahogany Rush - 1974", img: "images/500x500/225.jpg" },
		{ album: "The Children Of Lir - Loudest Whisper - 1974", img: "images/500x500/226.jpg" },
		{ album: "Choice Cuts - Master'S Apprentices - 1971", img: "images/500x500/227.jpg" },
		{ album: "Choice Quality Stuff/Anytime - It'S A Beautiful Day - 1971", img: "images/500x500/228.jpg" },
		{ album: "Ciclos - Canarios - 1975", img: "images/500x500/229.jpg" },
		{ album: "Circoncolutions - Carpe Diem - 2015", img: "images/500x500/230.jpg" },
		{ album: "Circumvision - Kracq - 1978", img: "images/500x500/231.jpg" },
		{ album: "Circus - Argent - 1975", img: "images/500x500/232.jpg" },
		{ album: "Circus 2000 - Circus 2000 - 1970", img: "images/500x500/233.jpg" },
		{ album: "City Lips - Vanessa - 1975", img: "images/500x500/234.jpg" },
		{ album: "City Of The Sun - Heliopolis - 2014", img: "images/500x500/235.jpg" },
		{ album: "The Civil Surface - Egg - 1974", img: "images/500x500/236.jpg" },
		{ album: "Clear Light Symphony - Clearlight - 1975", img: "images/500x500/237.jpg" },
		{ album: "Clockwyze - Project Tyme - 1984", img: "images/500x500/238.jpg" },
		{ album: "Close To The Edge - Yes - 1972", img: "images/500x500/239.jpg" },
		{ album: "Clot 20 - Blay Tritono - 1976", img: "images/500x500/240.jpg" },
		{ album: "Coffee In Neukolln - Barock Project - 2012", img: "images/500x500/241.jpg" },
		{ album: "Collegium Musicum - Collegium Musicum - 1971", img: "images/500x500/242.jpg" },
		{ album: "Color Humano - Color Humano - 1972", img: "images/500x500/243.jpg" },
		{ album: "Color Humano Ii - Color Humano - 1973", img: "images/500x500/244.jpg" },
		{ album: "Color Hunano Iii - Color Humano - 1973", img: "images/500x500/245.jpg" },
		{ album: "Come In Un'Ultima Cena - Banco Del Mutuo Soccorso - 1976", img: "images/500x500/246.jpg" },
		{ album: "Commit Thyself - The Music Asylum - 1970", img: "images/500x500/247.jpg" },
		{ album: "Composition - Gregory Kirby - 1978", img: "images/500x500/248.jpg" },
		{ album: "Confesiones De Invierno - Sui Generis - 1973", img: "images/500x500/249.jpg" },
		{ album: "Conquista - Alux Nahual - 1982", img: "images/500x500/250.jpg" },
		{ album: "The Construkction Of Light - King Crimson - 2000", img: "images/500x500/251.jpg" },
		{ album: "Contaminazione - Il Rovescio Della Medaglia - 1973", img: "images/500x500/252.jpg" },
		{ album: "Contes Musicaux - Michel Ripoche & Andre Demay - 1977", img: "images/500x500/253.jpg" },
		{ album: "Continental Circus - Gong - 1971", img: "images/500x500/254.jpg" },
		{ album: "Contre Courant - Opus 5 - 1976", img: "images/500x500/255.jpg" },
		{ album: "Coses Nostres - Iceberg - 1976", img: "images/500x500/256.jpg" },
		{ album: "The Cosmic Jokers - The Cosmic Jokers - 1973", img: "images/500x500/257.jpg" },
		{ album: "Couleurs De Temps - Daniel Hass & Yves Hasselmann - 1978", img: "images/500x500/258.jpg" },
		{ album: "The Courage Of Others - Midlake - 2010", img: "images/500x500/259.jpg" },
		{ album: "Crac! - Area - 1974", img: "images/500x500/260.jpg" },
		{ album: "Crafty Hands - Happy The Man - 1978", img: "images/500x500/261.jpg" },
		{ album: "The Crazy World Of Arthur Brown - Arthur Brown - 1968", img: "images/500x500/262.jpg" },
		{ album: "Cressidea - Cressidea - 1970", img: "images/500x500/263.jpg" },
		{ album: "Crime Of The Century - Supertramp - 1974", img: "images/500x500/264.jpg" },
		{ album: "Crna Dama - Smak - 1977", img: "images/500x500/265.jpg" },
		{ album: "Cronologia Ii - El Reloj - 1976", img: "images/500x500/266.jpg" },
		{ album: "Crossing The Line - Asia Minor - 1979", img: "images/500x500/267.jpg" },
		{ album: "Cueille Le Jour - Carpe Diem - 1976", img: "images/500x500/268.jpg" },
		{ album: "Cuentos De Ayer Y De Hoy - Nu - 1978", img: "images/500x500/269.jpg" },
		{ album: "Culpeper'S Orchard - Culpeper'S Orchard - 1971", img: "images/500x500/270.jpg" },
		{ album: "The Cycle - The Cycle - 1970", img: "images/500x500/271.jpg" },
		{ album: "Cyclone - Tangerine Dream - 1978", img: "images/500x500/272.jpg" },
		{ album: "Czar - Czar - 1970", img: "images/500x500/273.jpg" },
		{ album: "Dance Of The Flames - Guru Guru - 1974", img: "images/500x500/274.jpg" },
		{ album: "Danger Money - Uk - 1979", img: "images/500x500/275.jpg" },
		{ album: "Danse Macabre - Esperanto - 1974", img: "images/500x500/276.jpg" },
		{ album: "Darwin! - Banco Del Mutuo Soccorso - 1972", img: "images/500x500/277.jpg" },
		{ album: "Dawn - Eloy - 1976", img: "images/500x500/278.jpg" },
		{ album: "Day Of Silver - Aquarium - 1984", img: "images/500x500/279.jpg" },
		{ album: "De Michele-Erausquin - Pastoral - 1979", img: "images/500x500/280.jpg" },
		{ album: "Dead Faces - Pholhas - 1973", img: "images/500x500/281.jpg" },
		{ album: "Death Is A Great Gambler - Coupla Prog - 1972", img: "images/500x500/282.jpg" },
		{ album: "Death Walks Behind You - Atomic Rooster - 1970", img: "images/500x500/283.jpg" },
		{ album: "Deceptive Bends - 10Cc - 1977", img: "images/500x500/284.jpg" },
		{ album: "Dedicato A Frazz - Semiramis - 1973", img: "images/500x500/285.jpg" },
		{ album: "Dedicato A Giovanna G - Hunka Munka - 1972", img: "images/500x500/286.jpg" },
		{ album: "De-Loused In The Comatorium - The Mars Volta - 2003", img: "images/500x500/287.jpg" },
		{ album: "Demons And Wizards - Uriah Deep - 1972", img: "images/500x500/288.jpg" },
		{ album: "Den Of Iniquity - The Norman Haines Band - 1971", img: "images/500x500/289.jpg" },
		{ album: "Den Za Den - Den Za Den - 1980", img: "images/500x500/290.jpg" },
		{ album: "Dentro L'Invisible - Genfuoco - 1979", img: "images/500x500/291.jpg" },
		{ album: "Depois Do Fim - Bacamarte - 1983", img: "images/500x500/292.jpg" },
		{ album: "Desatormentandonos - Pescado Rabioso - 1972", img: "images/500x500/293.jpg" },
		{ album: "Desert Places - Satin White - 1974", img: "images/500x500/294.jpg" },
		{ album: "Devil'S Masquerade - Syrius - 1971", img: "images/500x500/295.jpg" },
		{ album: "Di Terra - Banco Del Mutuo Soccorso - 1978", img: "images/500x500/296.jpg" },
		{ album: "Dialog S Vesmirem - Barnodaj - 1980", img: "images/500x500/297.jpg" },
		{ album: "Different Roads - Jake Jones - 1971", img: "images/500x500/298.jpg" },
		{ album: "Dingly Dell - Lindisfarne - 1972", img: "images/500x500/299.jpg" },
		{ album: "Dinner At The Ritz - City Boy - 1976", img: "images/500x500/300.jpg" },
		{ album: "Dinner In Honor Of Demon - Akuma No Bansan-Kai - 1976", img: "images/500x500/301.jpg" },
		{ album: "Dinosaur Swamps - The Flock - 1970", img: "images/500x500/302.jpg" },
		{ album: "Dirge - Mr. Sirius - 1994", img: "images/500x500/303.jpg" },
		{ album: "Discipline - King Crimson - 1981", img: "images/500x500/304.jpg" },
		{ album: "Distant Echoes - Jade Warrior - 1994", img: "images/500x500/305.jpg" },
		{ album: "Distortions - Blue Phantom - 1971", img: "images/500x500/306.jpg" },
		{ album: "Do Not Disturb - Van Der Graaf Generator - 2016", img: "images/500x500/307.jpg" },
		{ album: "Do You Like It Here Now, Are You Settling In? - Man - 1971", img: "images/500x500/308.jpg" },
		{ album: "Dolce Acqua - Delirium - 1971", img: "images/500x500/309.jpg" },
		{ album: "Dopo Il Buio La Luce - Salis - 1979", img: "images/500x500/310.jpg" },
		{ album: "Douar Nevez (Terre Nouvelle) - Dan Ar Braz - 1977", img: "images/500x500/311.jpg" },
		{ album: "Down To Earth - Nektar - 1974", img: "images/500x500/312.jpg" },
		{ album: "Dr. Siegel'S Fried Egg Shooting Machine - Flied Egg - 1972", img: "images/500x500/313.jpg" },
		{ album: "Drama - Yes - 1980", img: "images/500x500/314.jpg" },
		{ album: "The Dream Harbour - Willowglass - 2013", img: "images/500x500/315.jpg" },
		{ album: "Dreptul De A Visa - Progresiv Tm - 1973", img: "images/500x500/316.jpg" },
		{ album: "Drosselbart - Drosselbart - 1970", img: "images/500x500/317.jpg" },
		{ album: "Drugi Nacin - Drugi Nacin - 1975", img: "images/500x500/318.jpg" },
		{ album: "Drunk And Happy - Prudence - 1973", img: "images/500x500/319.jpg" },
		{ album: "Dschinn - Dschinn - 1972", img: "images/500x500/320.jpg" },
		{ album: "Dupa Melci - Nicu Alifantis - 1979", img: "images/500x500/321.jpg" },
		{ album: "Durazno Sangrando - Invisible - 1975", img: "images/500x500/322.jpg" },
		{ album: "Dynastie Crisis - Dynastie Crisis - 1970", img: "images/500x500/323.jpg" },
		{ album: "Eagle Rock - Titanic - 1974", img: "images/500x500/324.jpg" },
		{ album: "Earth - Vangelis O Papathanassiou - 1973", img: "images/500x500/325.jpg" },
		{ album: "East - East - 1972", img: "images/500x500/326.jpg" },
		{ album: "East River - East River Consort - 1971", img: "images/500x500/327.jpg" },
		{ album: "Eclipse - Cano - 1978", img: "images/500x500/328.jpg" },
		{ album: "The Edgar Broughton Band - The Edgar Broughton Band - 1971", img: "images/500x500/329.jpg" },
		{ album: "Ege Bamyasi - Can - 1972", img: "images/500x500/330.jpg" },
		{ album: "Egg - Egg - 1970", img: "images/500x500/331.jpg" },
		{ album: "Eider Stellaire I - Eider Stellaire - 1981", img: "images/500x500/332.jpg" },
		{ album: "Eight Days (A Personal Journey) - Austin Roberts & Advent - 1976", img: "images/500x500/333.jpg" },
		{ album: "El Jardin De Los Presentes - Invisible - 1976", img: "images/500x500/334.jpg" },
		{ album: "El Volantin - Los Jaivas - 1971", img: "images/500x500/335.jpg" },
		{ album: "Electric Food - Electric Food - 1970", img: "images/500x500/336.jpg" },
		{ album: "Electric Indian - Dull Knife - 1971", img: "images/500x500/337.jpg" },
		{ album: "Electric Savage - Colosseum Ii - 1977", img: "images/500x500/338.jpg" },
		{ album: "Electric Silence - Dzyan - 1974", img: "images/500x500/339.jpg" },
		{ album: "Electricity - Aquarium - 1981", img: "images/500x500/340.jpg" },
		{ album: "Elefanten - Kebnekaise - 1977", img: "images/500x500/341.jpg" },
		{ album: "Elegant Gypsy - Ai Di Meola - 1977", img: "images/500x500/342.jpg" },
		{ album: "Elektronik Turkuler - Erkin Koray - 1974", img: "images/500x500/343.jpg" },
		{ album: "Elements - Flame Dream - 1979", img: "images/500x500/344.jpg" },
		{ album: "Elements - Roger Glover - 1990", img: "images/500x500/345.jpg" },
		{ album: "Eli - Jan Akkerman - 1976", img: "images/500x500/346.jpg" },
		{ album: "Elixir - Azahar - 1977", img: "images/500x500/347.jpg" },
		{ album: "Eloy - Eloy - 1971", img: "images/500x500/348.jpg" },
		{ album: "Elysian Encounter - Baker Gurvitz Army - 1975", img: "images/500x500/349.jpg" },
		{ album: "Emancipated - Sage - 1972", img: "images/500x500/350.jpg" },
		{ album: "Emerson, Lake, & Palmer - Emerson, Lake, & Palmer - 1970", img: "images/500x500/351.jpg" },
		{ album: "Emile Jacotey - Ange - 1975", img: "images/500x500/352.jpg" },
		{ album: "The Empyreal Ballet - Window - 1978", img: "images/500x500/353.jpg" },
		{ album: "En Anna Heille Anteeksi - Anki - 1975", img: "images/500x500/354.jpg" },
		{ album: "An Ny Tid Ar Har... - November - 1970", img: "images/500x500/355.jpg" },
		{ album: "En Regardant Passer Le Temps - Carpe Diem - 1976", img: "images/500x500/356.jpg" },
		{ album: "End Of The World - Aphtodites Child - 1968", img: "images/500x500/357.jpg" },
		{ album: "Energy - Energy - 1974", img: "images/500x500/358.jpg" },
		{ album: "Enigma - Enigma - 1971", img: "images/500x500/359.jpg" },
		{ album: "Enigmatic - Czeslaw Niemen - 1969", img: "images/500x500/360.jpg" },
		{ album: "Ennea - Chase - 1972", img: "images/500x500/361.jpg" },
		{ album: "Epilog - Anglagard - 1994", img: "images/500x500/362.jpg" },
		{ album: "Epsilon - Epsilon - 1971", img: "images/500x500/363.jpg" },
		{ album: "Erlkoenig - Erlkoenig - 1973", img: "images/500x500/364.jpg" },
		{ album: "Eros - Dun - 1981", img: "images/500x500/365.jpg" },
		{ album: "Eros & Thanatos - Haddad - 2009", img: "images/500x500/366.jpg" },
		{ album: "Erwartung - Eden - 1978", img: "images/500x500/367.jpg" },
		{ album: "Escenes - Gotic - 1978", img: "images/500x500/368.jpg" },
		{ album: "Espacios - Ave Rock - 1977", img: "images/500x500/369.jpg" },
		{ album: "Espana Ano 75 - Granada - 1976", img: "images/500x500/370.jpg" },
		{ album: "Esperanto Rock Orchestra - Esperanto - 1973", img: "images/500x500/371.jpg" },
		{ album: "At Epres... - Memoriance - 1976", img: "images/500x500/372.jpg" },
		{ album: "Etcetera - Laghonia - 1971", img: "images/500x500/373.jpg" },
		{ album: "汚れた街にいても - Ken Narita - 1972", img: "images/500x500/374.jpg" },
		{ album: "Every Good Boy Deserves Favour - The Moody Blues - 1971", img: "images/500x500/375.jpg" },
		{ album: "Everybody Is Everybody Else - Barclay James Harvest - 1974", img: "images/500x500/376.jpg" },
		{ album: "Ezekiel - Itoiz - 1980", img: "images/500x500/377.jpg" },
		{ album: "Faculty Recital - Peter Berkow & Friends - 1976", img: "images/500x500/378.jpg" },
		{ album: "Faeria - Foehn - 1985", img: "images/500x500/379.jpg" },
		{ album: "Fairyport - Wigwam - 1971", img: "images/500x500/380.jpg" },
		{ album: "The Family - Mashmakhan - 1971", img: "images/500x500/381.jpg" },
		{ album: "Fandangos In Space - Carmen - 1973", img: "images/500x500/382.jpg" },
		{ album: "Fantasy Of Horses - Rainbow Theatre - 1976", img: "images/500x500/383.jpg" },
		{ album: "Faust Iv - Faust - 1973", img: "images/500x500/384.jpg" },
		{ album: "Fear Of The Dark - Gordon Giltrap - 1978", img: "images/500x500/385.jpg" },
		{ album: "Fearless, Tearless, And Even Less - Circus - 1980", img: "images/500x500/386.jpg" },
		{ album: "Fede, Speranza, Carita - J.E.T. - 1972", img: "images/500x500/387.jpg" },
		{ album: "Felona E Sorona - Le Orme - 1973", img: "images/500x500/388.jpg" },
		{ album: "Fenyes Nap - Bright Sun - 1977", img: "images/500x500/389.jpg" },
		{ album: "Fette Jahre - Lokomotive Kreuzberg - 1975", img: "images/500x500/390.jpg" },
		{ album: "Ffwd - Ffwd - 1994", img: "images/500x500/391.jpg" },
		{ album: "Fields - Fields - 1971", img: "images/500x500/392.jpg" },
		{ album: "The Fifth Word - Novac - 1970", img: "images/500x500/393.jpg" },
		{ album: "First Album - Mo - 1976", img: "images/500x500/394.jpg" },
		{ album: "First Base - Babe Ruth - 1976", img: "images/500x500/395.jpg" },
		{ album: "First Offense - The Fents - 1972", img: "images/500x500/396.jpg" },
		{ album: "The First Time - Shlomo Yidov - 1978", img: "images/500x500/397.jpg" },
		{ album: "First Utterance - Comus - 1970", img: "images/500x500/398.jpg" },
		{ album: "Fish Out Of Water - Chris Squire - 1975", img: "images/500x500/399.jpg" },
		{ album: "Fish Rising - Steve Hillage - 1975", img: "images/500x500/400.jpg" },
		{ album: "Fjarilar | Magen - Ragnarok - 1979", img: "images/500x500/401.jpg" },
		{ album: "Flasket Brinner - Flasket Brinner - 1971", img: "images/500x500/402.jpg" },
		{ album: "Floating - Eloy - 1974", img: "images/500x500/403.jpg" },
		{ album: "Floating World - Jade Warrior - 1974", img: "images/500x500/404.jpg" },
		{ album: "The Flock - The Flock - 1969", img: "images/500x500/405.jpg" },
		{ album: "Fly Away - Minotaurus - 1978", img: "images/500x500/406.jpg" },
		{ album: "Flying Teapot - Gong - 1973", img: "images/500x500/407.jpg" },
		{ album: "Focus 2 - Focus - 1971", img: "images/500x500/408.jpg" },
		{ album: "Focus 3 - Focus - 1972", img: "images/500x500/409.jpg" },
		{ album: "Focus Plays Focus - Focus - 1970", img: "images/500x500/410.jpg" },
		{ album: "Foetus - Potemkine - 1976", img: "images/500x500/411.jpg" },
		{ album: "Fog On The Tyne - Lindisfarne - 1976", img: "images/500x500/412.jpg" },
		{ album: "Folkjokeopus - Roy Harper - 1969", img: "images/500x500/413.jpg" },
		{ album: "Follow My Dream - Sbb - 1978", img: "images/500x500/414.jpg" },
		{ album: "Fool'S Meeting - Delivery - 1970", img: "images/500x500/415.jpg" },
		{ album: "For Girls Who Plump In The Night - Caravan - 1973", img: "images/500x500/416.jpg" },
		{ album: "For You The Old Woman - Mirthrandir - 1976", img: "images/500x500/417.jpg" },
		{ album: "Formerly Anthrax - Show Of Hands - 1970", img: "images/500x500/418.jpg" },
		{ album: "Fountains Of Light - Show Of Light - 1970", img: "images/500x500/419.jpg" },
		{ album: "Four Moments - Sebastian Hardie - 1975", img: "images/500x500/420.jpg" },
		{ album: "The Four Seasons - Oki Koichi - 1974", img: "images/500x500/421.jpg" },
		{ album: "Foxtrot - Genesis - 1972", img: "images/500x500/422.jpg" },
		{ album: "Fragile - Yes - 1971", img: "images/500x500/423.jpg" },
		{ album: "Framtiden Ar Ett Svavande Skepp, Forankrat I Forntiden - Algarnas Tradgard - 1972", img: "images/500x500/424.jpg" },
		{ album: "Frances The Mute - The Mars Volta - 2005", img: "images/500x500/425.jpg" },
		{ album: "Free Electric Sound - Gila - 1971", img: "images/500x500/426.jpg" },
		{ album: "Free Hand - Gentle Giant - 1975", img: "images/500x500/427.jpg" },
		{ album: "Friendship - Junipher Greene - 1971", img: "images/500x500/428.jpg" },
		{ album: "Frijid Pink - Frijid Pink - 1970", img: "images/500x500/429.jpg" },
		{ album: "Fritt Fall - Kornet - 1977", img: "images/500x500/430.jpg" },
		{ album: "Frob - Frob - 1976", img: "images/500x500/431.jpg" },
		{ album: "From Genesis To Revelations - Genesis - 1969", img: "images/500x500/432.jpg" },
		{ album: "From The New World - Pell Mell - 1973", img: "images/500x500/433.jpg" },
		{ album: "Frumpy 2 - Frumpy - 1971", img: "images/500x500/434.jpg" },
		{ album: "Frutti Per Kagua - Capitolo 6 - 1972", img: "images/500x500/435.jpg" },
		{ album: "Fuchsia - Fuchsia - 1970", img: "images/500x500/436.jpg" },
		{ album: "Funky Caravan - Space Circus - 1978", img: "images/500x500/437.jpg" },
		{ album: "Funky Steps - Tranzam - 1974", img: "images/500x500/438.jpg" },
		{ album: "Fusioon - Fusioon - 1972", img: "images/500x500/439.jpg" },
		{ album: "Fusioon 2 - Fusioon - 1974", img: "images/500x500/440.jpg" },
		{ album: "Futurama - Be+Bop Deluxe - 1975", img: "images/500x500/441.jpg" },
		{ album: "Future Days - Can - 1973", img: "images/500x500/442.jpg" },
		{ album: "Future Legends - Fruupp - 1973", img: "images/500x500/443.jpg" },
		
	];
	var quote = quotes[Math.floor(Math.random() * quotes.length)];
	document.getElementById("quote").innerHTML =
	'<img src="' + quote.img + '">' +
	'<h3>' + quote.album + '</h3>';
}
