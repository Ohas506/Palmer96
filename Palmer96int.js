e = campaignTrail_temp;

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#700016";

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#ffffff";

            document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

            $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

            $(".container")[0].style.backgroundColor = "#ffffff";

            document.getElementById("header").src = "https://i.imgur.com/ElXMLcD.png";

            document.body.background = "https://sites.msudenver.edu/tpswesternregion/wp-content/uploads/sites/476/2021/04/master-pnp-var-0700-0760-0760r.jpeg";

            e.election_json = [{"model":"campaign_trail.election","pk":5,"fields":{"year":1896,"summary":"<div style='overflow-y:scroll;height:200px;'>The nomination of William Jennings Bryan for the presidency has triggered a bolt of so called \"Gold Democrats\", opposed to Bryans policies of Free Silver as well as the policies of protectionism championed by McKinley. Admirers of the policies of president Grover Cleveland, the newly created \"National Democratic Party\", has convened in Indianapolis to nominate the elderly former Union General and former Governor of Illinois, John M. Palmer for president. Palmer will have to navigate a difficult road,<br><br>- convincing disillusioned Democrats to support him over McKinley.<br><br>-while keeping the classical liberal tradition of Cleveland alive.</div>","image_url":"https://tile.loc.gov/storage-services/service/pnp/ppmsca/25400/25455r.jpg","winning_electoral_vote_number":224,"advisor_url":"https://assets.editorial.aetnd.com/uploads/2009/10/grover-cleveland-biggest-wipeout-in-midterm-election-history-3246331.jpg","recommended_reading":"<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>","has_visits":1,"no_electoral_majority_image":"../static/images/2012-no-majority.jpg"}}];e.temp_election_list = [{"id":5,"year":1896,"is_premium":0,"display_year":"1896"}];e.credits = "Ohas";e.global_parameter_json = [{"model":"campaign_trail.global_parameter","pk":1,"fields":{"vote_variable":1.125,"max_swing":0.12,"start_point":0.94,"candidate_issue_weight":10,"running_mate_issue_weight":3,"issue_stance_1_max":-0.71,"issue_stance_2_max":-0.3,"issue_stance_3_max":-0.125,"issue_stance_4_max":0.125,"issue_stance_5_max":0.3,"issue_stance_6_max":0.71,"global_variance":0.01,"state_variance":0.005,"question_count":25,"default_map_color_hex":"#C9C9C9","no_state_map_color_hex":"#999999"}}];e.candidate_json = [{"model":"campaign_trail.candidate","pk":20,"fields":{"first_name":"John M.","last_name":"Palmer","election":5,"party":"National Democratic","state":"Kentucky","priority":1,"description":"Born at Eagle Creek in Scott County, Kentucky, Palmer's family in 1831 moved to Alton, Illinois, where he would later rise through the ranks to become a Republican elector, being one of the leading voices of support for the nomination of a friend of his, Abraham Lincoln. During the Civil War he served as a Major General, taking part in the battle of Chickamauga, among others. He would also serve as the military governor of Kentucky, going on to be elected as the Republican Governor of Illinois, later breaking with the Republican Party over the tariff policies of Grant. In 1892, he was a serious contender for the Democratic Parties nomination.<br><br>Palmer has a storied political career, and has been a consistent supporter of both tariff reform and the gold standard, as well as former president Grover Cleveland. Despite this, many people are concerned about his advanced age, of seventy nine years, and if he will be able to campaign for office, let alone be able to be an effective president.","color_hex":"#efe150","secondary_color_hex":null,"is_active":1,"image_url":"https://upload.wikimedia.org/wikipedia/commons/c/ca/JohnMPalmer.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":0,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":1002,"fields":{"first_name":"Simon Bolivar","last_name":"Buckner","election":5,"party":"National Democratic","state":"Kentucky","priority":1,"description":"Simon Bolivar Buckner has had a storied military career, serving in the Mexican American war, before becoming a Major General in service of the Confederate States of America, serving at the battle of  Chickamauga among others. After the war, Buckner would be elected as the governor of Kentucky, and would stand as a strong supporter of the Gold Standard. <br><br>While having Buckner on the ticket would greatly boost you in Kentucky as you both are from the state, as well as symbolize the reconciliation of the union as you were a union general and he a confederate, it would add to the perception that this is a ticket of the elderly as Buckner is seventy three years old.","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Reminiscences%2C_or%2C_Four_years_in_the_Confederate_Army_-_a_history_of_the_experiences_of_the_private_soldier_in_camp%2C_hospital%2C_prison%2C_on_the_march%2C_and_on_the_battlefield%2C_1861_to_1865_%281898%29_%2814793579403%29.jpg/328px-thumbnail.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"Simon Bolivar Buckner has had a storied military career, serving in the Mexican American war, before becoming a Major General in service of the Confederate States of America, serving at the battle of  Chickamauga among others. After the war, Buckner would be elected as the governor of Kentucky, and would stand as a strong supporter of the Gold Standard. <br><br>While having Buckner on the ticket would greatly boost you in Kentucky as you both are from the state, as well as symbolize the reconciliation of the union as you were a union general and he a confederate, it would add to the perception that this is a ticket of the elderly as Buckner is seventy three years old.","candidate_score":1,"running_mate":true,"scrollable":false,"partner":"1"}},{"model":"campaign_trail.candidate","pk":1003,"fields":{"first_name":"Edward S.","last_name":"Bragg","election":5,"party":"National Democratic Party","state":"New York","priority":1,"description":"Edward S. Bragg has had a distinguished career serving as an accomplished union army officer during the Civil War, after which he served four terms in the House of Representatives representing Wisconsin. Later, he was United States Minister to Mexico during the presidency of Grover Cleveland.<br><br>Brag is a vocal opponent of the nomination of Bryan, and has threatened to vote for McKinley, in the process flipping his home state to him. Choosing him as your running mate would clam some voters sensitivities regarding your age, but might only further the perception that your campaign is just a vehicle to elect McKinley.","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"https://upload.wikimedia.org/wikipedia/commons/f/fa/ESBragg.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"Edward S. Bragg has had a distinguished career serving as an accomplished union army officer during the Civil War, after which he served four terms in the House of Representatives representing Wisconsin. Later, he was United States Minister to Mexico during the presidency of Grover Cleveland.<br><br>Brag is a vocal opponent of the nomination of Bryan, and has threatened to vote for McKinley, in the process flipping his home state to him. Choosing him as your running mate would clam some voters sensitivities regarding your age, but might only further the perception that your campaign is just a vehicle to elect McKinley.","candidate_score":1,"running_mate":true,"scrollable":false,"partner":"0"}},{"model":"campaign_trail.candidate","pk":21,"fields":{"first_name":"William Jennings ","last_name":"Bryan","election":5,"party":"Democrat","state":"Nebraska","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#0061ff","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","candidate_score":1,"running_mate":false,"scrollable":false,"partner":"0"}},{"model":"campaign_trail.candidate","pk":22,"fields":{"first_name":"William","last_name":"McKinley","election":5,"party":"Republican","state":"Ohio","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#e32400","secondary_color_hex":null,"is_active":0,"image_url":"../static/images/barack-obama-2012.jpg","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}}];e.running_mate_json = [{"model":"campaign_trail.running_mate","pk":2001,"fields":{"candidate":20,"running_mate":1002}},{"model":"campaign_trail.running_mate","pk":2002,"fields":{"candidate":20,"running_mate":1003}}];