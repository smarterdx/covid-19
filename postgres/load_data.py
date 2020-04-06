import psycopg2

conn = psycopg2.connect("host=localhost password=covid dbname=covid user=covid port=5431")

def insert_patients(patients):
  cur = conn.cursor()
  query = """
      INSERT INTO patient_base ("first_name", "last_name", "mrn", "hospital_id", "dob", "sex", "created_at", "updated_at")
      VALUES (%s, %s, %s, %s, %s, %s, %s, %s);
  """
  for patient in patients:
    cur.execute(query, patient)
  conn.commit()
  cur.close()

def insert_physicians(physicians):
  cur = conn.cursor()
  query = """
      INSERT INTO physician_base ("first_name", "last_name", "email", "phone", "degree", "hospital_id", "created_at", "updated_at")
      VALUES (%s, %s, %s, %s, %s, %s, %s, %s);
  """
  for physician in physicians:
    cur.execute(query, physician)
  conn.commit()
  cur.close()

def insert_hospitalstays(hospitalstays):
  cur = conn.cursor()
  query = """
      INSERT INTO hospitalstay_base ("hospital_id", "admission_date_time", "discharge_date_time", "account", "age", "current_location", "current_service", "patient_id", "created_at", "updated_at")
      VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s);
  """
  for hospitalstay in hospitalstays:
    cur.execute(query, hospitalstay)
  conn.commit()
  cur.close()

def insert_observations(observations):
  cur = conn.cursor()
  query = """
      INSERT INTO observation_base (
        "name",
        "date",
        "value",
        "numeric_value",
        "hospitalstay_id"
      )
      VALUES (%s, %s, %s, %s, %s);
  """
  for observation in observations:
    cur.execute(query, observation)
  conn.commit()
  cur.close()

insert_patients([
  ("Angel","Rodriguez","312 39 0933","demo",None,"M","2020-03-14 21:58:59.981982+00","2020-03-14 22:10:50.187331+00")
])

insert_physicians([
  ("Raf","Nada","raf@example.com","212-555-1011","MD","demo","2020-03-14 22:10:50.219489+00","2020-03-14 22:10:50.258188+00")
])

insert_hospitalstays([
  ("demo","2019-12-29 18:00:12+00",None,"5844332933",38,"2N","Medicine",11,"2020-03-14 21:58:38.477374+00","2020-03-14 22:10:49.996155+00")
])

insert_observations([
  ('hr', '2020-04-04', '12', 12, 15)
])